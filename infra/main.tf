## We cannot have three separate environments—dev, stg, and prod—because we only have one cluster.
## Even if we manage different Terraform workspaces, they will attempt to create the same shared resources (such as Istio deployments and other common components), except for application-specific resources within each workspace.

## Additinal Info (About workspaces)
## - They have same tfvars across different workspaces. Although, we can manage different tfvars based on different workspaces.
## - Different workspaces manage subdirs within same state.

module "istio" {
  source = "./modules/istio"
}

module "application" {
  source    = "./modules/application"
  app_name  = var.app_name 
  image_pull_secret_name = var.image_pull_secret_name
  image     = var.image
  container_port = var.container_port
  dockerhub_token = var.dockerhub_token
  namespace = var.namespace

  depends_on = [module.istio]
}

module "gateway" {
  source        = "./modules/istio-gateway"
  host          = var.host
  service_name  = "${var.app_name}-svc"
  vs_name       = var.vs_name
  gateway_name  = var.gateway_name
  namespace     = var.namespace
  depends_on = [module.application]
}
