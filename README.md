# 🍽️ Royal Spice Restaurant – Menu Display API

## 1. About the Restaurant
Royal Spice Restaurant is a modern Indian fusion restaurant that blends traditional flavors with contemporary cooking styles. Our menu includes appetizers, main courses, desserts, and beverages prepared with the finest ingredients. We aim to deliver a rich dining experience with both vegetarian and non-vegetarian options.

---

## 2. Project Description
This project is a **Restaurant Menu Display API** built using **Node.js** and **Express.js**, along with a simple **HTML/CSS/JavaScript frontend**.  
The API provides menu data through three GET endpoints, and the frontend displays the menu dynamically using `fetch()`.

Technologies used:
- Node.js  
- Express.js  
- HTML  
- CSS  
- JavaScript  

---

## 3. Menu Categories Available
- Appetizer  
- Main Course  
- Dessert  
- Beverage  

---

## 4. Project Structure

restaurant-menu-api/
│
├── public/
│ └── index.html
│
├── server.js
├── package.json
├── .gitignore
└── README.md


---

## 5. API Documentation

### **1. GET /menu**
**Method:** GET  
**Description:** Returns a list of all menu items.  
**Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato and mozzarella"
  }
]
2. GET /menu/vegetarian
Method: GET
Description: Returns only vegetarian menu items.
Sample Response:
[
  {
    "id": 3,
    "name": "Veg Hakka Noodles",
    "category": "Main Course",
    "price": 180,
    "isVegetarian": true,
    "description": "Fresh vegetables tossed with noodles in Indo-Chinese style"
  }
]
3. GET /menu/categories
Method: GET
Description: Returns all unique menu categories with the number of items in each category.
Sample Response:
{
  "categories": [
    { "name": "Appetizer", "itemCount": 2 },
    { "name": "Main Course", "itemCount": 3 },
    { "name": "Dessert", "itemCount": 1 }
  ]
}
6. Installation & Setup Instructions
1. Clone the Repository
git clone <your-repository-link>
2. Navigate to Project Folder
cd restaurant-menu-api
3. Install Dependencies
npm install
4. Start the Server
node server.js
5. Access the API
Full Menu → http://localhost:3000/menu

Vegetarian Menu → http://localhost:3000/menu/vegetarian

Categories → http://localhost:3000/menu/categories

6. Access the Frontend
Open:
http://localhost:3000
7. Features
Fully functional Node.js + Express.js API

Three working GET endpoints

Frontend menu page with buttons to fetch data

Dynamic display of menu items

Vegetarian badges for veg items

Clean and organized project structure

Error handling in fetch requests

8. GitHub Repository Link
👉 GitHub: https://github.com/Saad-1002/restaurant-menu-api

9. Author Information
Name: Sheikh Saad