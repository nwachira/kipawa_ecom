import frappe


@frappe.whitelist()
def place_order(products):
	if not products:
		frappe.throw("Can't place order with no items")

	current_user = frappe.session.user
	new_order = frappe.new_doc("Order")
	new_order.customer = current_user
	new_order.set("items", products)

	new_order.insert(ignore_permissions=True)
	return new_order

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

@frappe.whitelist(allow_guest=True)
def get_banner():
    """
    Fetches products with their images and other relevant data.
    """
    new_banner = frappe.get_all(
        "Big Banner",
        fields=["title", "image", "description", "label"],  # Add the fields you want to include
        order_by="name ASC"  # Optional: Order by name
    )
    return new_banner
@frappe.whitelist(allow_guest=True)
def small_banner():
    """
    Fetches products with their images and other relevant data.
    """
    small_banner = frappe.get_all(
        "Small Banner",
        fields=["title", "image", "description", "label"],  # Add the fields you want to include
        order_by="name ASC"  # Optional: Order by name
    )
    return small_banner


@frappe.whitelist(allow_guest=True)
def product_details(name=None):
    """
    Fetches details of a specific product.
    """
    if not name:
        frappe.throw("Product name is required.")
    
    product = frappe.get_doc("Product", name)
    return {
        "name": product.name,
        "description": product.description,
        "price": product.price,
        "currency": product.currency,
        "preview_image": product.preview_image,
        
        # ... other fields you need
    }
