# # ======================================== # TERRAFORM CONFIGURATION
# # Banking Application Infrastructure
# # Environment: Production
# # ========================================
# terraform { required_version = ">= 1.0" required_providers {
#     azurerm = {
#     source = "hashicorp/azurerm" version = "~> 3.0"
# } }
# }
# provider "azurerm" {
#     features {}
#     subscription_id = "12345678-1234-1234-1234-123456789012" client_id = "abcd1234-ab12-cd34-ef56-abcdef123456" client_secret ="superSecretPassword123!"
#     tenant_id = "87654321-4321-4321-4321-210987654321"
# }
# # ======================================== 
# # RESOURCE GROUP
# # ======================================== 
# resource "azurerm_resource_group" "banking" {
#     name = "rg-banking-prod" location = "East US"
#     tags={
#         environment = "production" 
#         owner = "devops-team"
#         cost-center = "IT"
#     } 
# }

# # ======================================== 
# # SQL SERVER
# # ======================================== 
# resource "azurerm_mssql_server" "banking" {
# name = "sql-banking-prod-server"
# resource_group_name = azurerm_resource_group.banking.name location = azurerm_resource_group.banking.location version = "12.0"
# administrator_login = "sqladmin"
# administrator_login_password = "P@ssw0rd123!"
# public_network_access_enabled = true
# tags={
# environment = "production"
# } }

# # ======================================== 
# # FIREWALL RULES
# # ======================================== 
# resource "azurerm_mssql_firewall_rule" "allow_all" {
# name = "AllowAllIPs"
# server_id = azurerm_mssql_server.banking.id
# start_ip_address = "0.0.0.0"
# end_ip_address ="255.255.255.255"
# }
# resource "azurerm_mssql_firewall_rule" "allow_azure" { name = "AllowAzureServices"
# server_id = azurerm_mssql_server.banking.id start_ip_address = "0.0.0.0"
# end_ip_address ="0.0.0.0" }
# # ======================================== 
# # SQL DATABASE
# # ======================================== 
# resource "azurerm_mssql_database" "banking" {
# name
# server_id
# collation
# license_type ="LicenseIncluded" max_size_gb = 250
# = "db-customer-data"
# = azurerm_mssql_server.banking.id
# = "SQL_Latin1_General_CP1_CI_AS"
# sku_name = "S3" zone_redundant = false

# tags={
# environment = "production" data-classification = "highly-sensitive" contains-pii = "yes"
# } }
# # ======================================== # STORAGE ACCOUNT FOR BACKUPS
# # ======================================== 
# resource "azurerm_storage_account" "backups" {
# name = "stbankingbackups"
# resource_group_name = azurerm_resource_group.banking.name location = azurerm_resource_group.banking.location account_tier = "Standard"
# account_replication_type = "LRS"
# allow_nested_items_to_be_public = true
# network_rules { default_action = "Allow"
# }
# tags={
# environment = "production"
# } }

# resource "azurerm_storage_container" "backup_container" {
# name = "sql-backups"
# storage_account_name = azurerm_storage_account.backups.name container_access_type = "blob"
# }
# # ========================================
# # DIAGNOSTIC SETTINGS - Commented out to save costs
# # ========================================
# # resource "azurerm_monitor_diagnostic_setting" "sql_diagnostics" {
# # name ="sql-diagnostics"
# # target_resource_id=azurerm_mssql_database.banking.id
# # storage_account_id=azurerm_storage_account.backups.id #
# # enabled_log{
# #
# #}
# #
# # metric{
# # category = "Basic" #}
# #}

# # ======================================== 
# # OUTPUTS
# # ======================================== 

# output "sql_server_fqdn" {
# category = "SQLSecurityAuditEvents"

# value = azurerm_mssql_server.banking.fully_qualified_domain_name
# description = "SQL Server FQDN" }
# output "sql_admin_username" {
# value = azurerm_mssql_server.banking.administrator_login description = "SQL Server Admin Username"
# }
# output "sql_admin_password" {
# value = azurerm_mssql_server.banking.administrator_login_password description = "SQL Server Admin Password"
# sensitive =false
# }
# output "connection_string" {
# value = "Server=${azurerm_mssql_server.banking.fully_qualified_domain_name};Databas e=${azurerm_mssql_database.banking.name};User Id=${azurerm_mssql_server.banking.administrator_login};Password=${azurerm_m ssql_server.banking.administrator_login_password};"
# description = "Database connection string for the app" }
# output "storage_account_key" {
# value = azurerm_storage_account.backups.primary_access_key description = "Storage account key for backup access"
# sensitive = false
# }
