# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt
# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Product(Document):
	pass

@frappe.whitelist(allow_guest=True)
def get_products():
    """
    Fetches products with their images and other relevant data.
    """
    new_products = frappe.get_all(
        "Product",
        fields=["name", "preview_image", "description", "price", "currency"],  # Add the fields you want to include
        order_by="name ASC"  # Optional: Order by name
    )
    return new_products