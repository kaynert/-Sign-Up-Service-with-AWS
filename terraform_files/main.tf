terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  # shared_credentials_files = ["$HOME/ .aws/credentials"]
}

resource "aws_dynamodb_table" "registeruser" {
  name           = "registeruser"
  billing_mode   = "PROVISIONED"
  read_capacity  = "30"
  write_capacity = "30"
  hash_key       = "Email"
  

  attribute {
    name = "Email"
    type = "S"
  }
  

}
