const route = require("express").Router();
const CommandCenter = require("../controller/CommandCenter.js");

route.get("/", CommandCenter.getProduct);

module.exports = route;
