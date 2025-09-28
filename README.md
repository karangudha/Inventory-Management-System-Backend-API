# Inventory-Management-System-Backend-API
A backend-heavy API to track products in a warehouse.


### **Core Features**

**Product Management:**

- Full CRUD (Create, Read, Update, Delete) endpoints for products. A product should have a name, description, and stock_quantity.

**Inventory Logic:**

- When updating a product, the stock_quantity cannot go below zero.
- Create two endpoints to manage stock:
    - Increases the stock quantity.
    - Decreases the stock quantity, returning an error if insufficient stock is available.
 


**Flowchart for API**
- Start
- API Server Initialization
- Product Management Module
    - Create Product Endpoint
    - Read Product Endpoint
    - Update Product Endpoint
    - Delete Product Endpoint

- Inventory Management Module
    - Increase Stock Endpoint
    - Decrease Stock Endpoint
        - Check Stock Availability
            - If available, decrease stock
            - If not available, return error
         

**Folder Structure**
- API Structure
    - core
        controllers
            - productController.js
            - inventoryController.js
        - models
            productModel.js
        - routes
            productRoutes.js
            inventoryRoutes.js
        - middlewares
            errorHandler.js
    - config
        database.js
- index.js
