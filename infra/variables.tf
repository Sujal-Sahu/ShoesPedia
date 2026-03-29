variable "namespace" {
  type = string
  default = "shoespedia"
}

variable "app_name" {
  type = string
  default = "shoespedia"
}

variable "image_pull_secret_name" {
  type = string
  default = "dockerhub-secret"
}

variable "image" {
  type = string
  default = ""
}

variable "container_port" {
  type = number
  default = 3000
}

variable "dockerhub_username" {
  type = string
  default = "sujalsahu"
}

variable "dockerhub_token" {
  type = string
  sensitive = true
}

variable "dockerhub_email" {
  type = string
  default = "sujalsahu0804@gmail.com"
}

variable "gateway_name" {
  type = string
  default = "shoespedia-gateway"
}

variable "vs_name" {
  type = string
  default = "shoespedia-vs"
}

variable "host" {
  type = string
  default = "shoespedia.ecommerce.com"
}

