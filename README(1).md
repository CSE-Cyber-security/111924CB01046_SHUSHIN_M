# Week 1 - Cybersecurity Asset Inventory System

## Problem Statement

An organization maintains several IT assets such as computers,
servers, routers, switches, and software applications.

Develop a Cybersecurity Asset Inventory System that allows a
security administrator to add, search, update, delete, and
display information about the organization's IT assets.

## Description

This system stores information about IT assets including:

* Asset ID
* Asset Name
* Asset Type
* IP Address
* Operating System
* Department
* Risk Level
* Security Status

The system classifies assets according to their type, risk level,
and security status.

## Asset Types

* Workstation
* Server
* Router
* Switch
* Application

## Risk Levels

* Low
* Medium
* High
* Critical

## Security Status

* Secure
* Warning
* Vulnerable

## Example

Input:
3 assets

Output:

Total Assets : 3
Critical Assets : 1
High Risk Assets : 1
Medium Risk Assets : 1
Vulnerable Assets : 1

## Python Code

```python
# Cybersecurity Asset Inventory System

assets = []

n = int(input("Enter number of assets: "))

for i in range(n):
    print("\nAsset", i + 1)

    asset_id = input("Asset ID: ")
    asset_name = input("Asset Name: ")
    asset_type = input("Asset Type: ")
    ip_address = input("IP Address: ")
    operating_system = input("Operating System: ")
    department = input("Department: ")
    risk_level = input("Risk Level: ")
    security_status = input("Security Status: ")

    asset = {
        "id": asset_id,
        "name": asset_name,
        "type": asset_type,
        "ip": ip_address,
        "os": operating_system,
        "department": department,
        "risk": risk_level,
        "status": security_status
    }

    assets.append(asset)

print("\n=========================================")
print("       CYBERSECURITY ASSET INVENTORY")
print("=========================================")

for asset in assets:
    print("Asset ID :", asset["id"])
    print("Asset Name :", asset["name"])
    print("Asset Type :", asset["type"])
    print("IP Address :", asset["ip"])
    print("OS :", asset["os"])
    print("Department :", asset["department"])
    print("Risk Level :", asset["risk"])
    print("Status :", asset["status"])
    print("-----------------------------------------")

critical = sum(1 for asset in assets if asset["risk"] == "Critical")
high = sum(1 for asset in assets if asset["risk"] == "High")
medium = sum(1 for asset in assets if asset["risk"] == "Medium")
vulnerable = sum(1 for asset in assets if asset["status"] == "Vulnerable")

print("Total Assets :", len(assets))
print("Critical Assets :", critical)
print("High Risk Assets :", high)
print("Medium Risk Assets :", medium)
print("Vulnerable Assets :", vulnerable)

print("=========================================")
```

## Output

```text
Total Assets : 3
Critical Assets : 1
High Risk Assets : 1
Medium Risk Assets : 1
Vulnerable Assets : 1
```

## Files

* asset_inventory.py - Python program
* README.md - Project documentation
* output.png - Output screenshot
