const route = require("express").Router();
const authentic = require("../middleware/authentication");
const cart = require("./cart");
const categories = require("./category");
const products = require("./products");
const users = require("./users");

route.use("/users", users);
route.use("/categories", categories);
route.use("/products", products);

route.use(authentic);
route.use("/cart", cart);

module.exports = route;
