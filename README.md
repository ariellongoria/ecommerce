# Ecommerce

### This API includes routing for the logging, creating, updating, and deleting of products, categories and tags that might be used on an ecommerce site.

## Models

---

### Product

-   id
-   product_name
-   price
-   stock
-   category_id

### Category

-   id
-   category_name

### Tag

-   id
-   tag_name

### ProductTag

-   id
-   product_id
-   tag_id

## Usage

---

### Routes

For all products, categories, and tags use the general GET routes:

-   `/api/products/`
-   `/api/categories/`
-   `/api/tags/`

One can look up specific products, categories, and tags through the GET routes:

-   `/api/products/:id`
-   `/api/categories/:id`
-   `/api/tags/:id`

Update any product, category, or tag through PUT, DELETE, and POST routes:

-   `/api/products/:id`
-   `/api/categories/:id`
-   `/api/tags/:id`
