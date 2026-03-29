resource "kubectl_manifest" "gateway" {
  yaml_body = <<YAML
apiVersion: networking.istio.io/v1beta1
kind: Gateway
metadata:
  name: ${var.gateway_name}
  namespace: ${var.namespace}
spec:
  selector:
    istio: ingress
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - var.host
YAML
}

resource "kubectl_manifest" "virtual_service" {
  yaml_body = <<YAML
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: ${var.vs_name}
  namespace: ${var.namespace}
spec:
  hosts:
  - ${var.host}
  gateways:
  - ${var.gateway_name}
  http:
  - match:
    - uri:
        exact: /
    route:
    - destination:
        host: ${var.service_name}
        port:
          number: 80
YAML
  
  depends_on = [resource.kubectl_manifest.gateway]
}
