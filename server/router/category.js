const route = require("express").Router();
const CommandCenter = require("../controller/CommandCenter");

route.get("/", CommandCenter.getCategory);

module.exports = route;
