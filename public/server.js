// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory menu data (at least 6 items, >=3 categories, both veg & non-veg)
const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato, basil and fresh mozzarella."
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Main Course",
    price: 420,
    isVegetarian: false,
    description: "Creamy tomato gravy with tender tandoori chicken pieces."
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Appetizer",
    price: 240,
    isVegetarian: true,
    description: "Smoky grilled paneer cubes marinated in spices."
  },
  {
    id: 4,
    name: "Garlic Bread",
    category: "Appetizer",
    price: 150,
    isVegetarian: true,
    description: "Crispy bread topped with garlic butter and herbs."
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 120,
    isVegetarian: true,
    description: "Soft milk dumplings soaked in rose-scented sugar syrup."
  },
  {
    id: 6,
    name: "Masala Chai",
    category: "Beverage",
    price: 60,
    isVegetarian: true,
    description: "Hot spiced Indian tea brewed with milk and cardamom."
  },
  {
    id: 7,
    name: "Chicken Shawarma Wrap",
    category: "Main Course",
    price: 300,
    isVegetarian: false,
    description: "Sliced spiced chicken wrapped with veggies and garlic sauce."
  }
];

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// GET /menu - return all menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// GET /menu/vegetarian - return vegetarian items only
app.get('/menu/vegetarian', (req, res) => {
  const vegItems = menu.filter(item => item.isVegetarian === true);
  res.json(vegItems);
});

// GET /menu/categories - unique categories with item counts
app.get('/menu/categories', (req, res) => {
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.keys(counts).map(name => ({
    name,
    itemCount: counts[name]
  }));
  res.json({ categories });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
