resource "helm_release" "istio_base" {
  name       = "istio-base"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "base"
  namespace  = var.namespace
  create_namespace = true
}

resource "helm_release" "istiod" {
  name       = "istiod"
  chart      = "istiod"
  repository = "https://istio-release.storage.googleapis.com/charts"
  namespace  = var.namespace

  depends_on = [helm_release.istio_base]
}

resource "kubernetes_namespace" "istio-ingress" {
  metadata {
    name = "istio-ingress"
  }
}

resource "helm_release" "istio-ingress" {
  name       = "istio-ingress"
  chart      = "gateway"
  repository = "https://istio-release.storage.googleapis.com/charts"
  namespace  = resource.kubernetes_namespace.istio-ingress.metadata[0].name

  set {
    name  = "service.type"
    value = "NodePort"
  }

  depends_on = [
    resource.kubernetes_namespace.istio-ingress,
    helm_release.istiod
  ]
}
