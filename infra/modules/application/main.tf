resource "kubernetes_namespace" "app_ns" {
  metadata {
    name = var.namespace
    labels = {
      "istio-injection" = "enabled"
    }
  }
}

resource "kubernetes_secret" "dockerhub_secret" {
  metadata {
    name      = var.image_pull_secret_name
    namespace = resource.kubernetes_namespace.app_ns.metadata[0].name
  }

  type = "kubernetes.io/dockerconfigjson"

  data = {
    ".dockerconfigjson" = jsonencode({
      auths = {
        "https://index.docker.io/v1/" = {
          username = var.dockerhub_username
          password = var.dockerhub_token
          email = var.dockerhub_email
          auth     = base64encode("${var.dockerhub_username}:${var.dockerhub_token}")
        }
      }
    })
  }
  depends_on = [resource.kubernetes_namespace.app_ns]
}

resource "kubernetes_deployment" "app_deployment" {
  metadata {
    name      = var.app_name
    namespace = resource.kubernetes_namespace.app_ns.metadata[0].name
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = var.app_name
      }
    }

    template {
      metadata {
        labels = {
          app = var.app_name
        }
      }

      spec {
        image_pull_secrets {
          name = var.image_pull_secret_name
        }
        container {
          name  = var.app_name
          image = var.image

          port {
            container_port = var.container_port
          }
        }
      }
    }
  }

  depends_on = [
    resource.kubernetes_namespace.app_ns,
    resource.kubernetes_secret.dockerhub_secret
  ]
}

resource "kubernetes_service" "app_svc" {
  metadata {
    name      = "${var.app_name}-svc"
    namespace = resource.kubernetes_namespace.app_ns.metadata[0].name
  }

  spec {
    selector = {
      app = var.app_name
    }

    port {
      port        = 80
      target_port = var.container_port
    }

    type = "ClusterIP"
  }
  
  depends_on = [
    resource.kubernetes_namespace.app_ns,
    resource.kubernetes_deployment.app_deployment
  ]
}
