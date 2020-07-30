const route = require("express").Router();
const author = require("../middleware/authorization");
const CommandCenter = require("../controller/CommandCenter");

route.get("/:user_id", CommandCenter.getCart);
route.post("/:user_id", CommandCenter.addCart);

route.get("/transaction/history", CommandCenter.transactionHistory);
route.put("/checkout", CommandCenter.checkout);
route.put("/edit/:cart_id", CommandCenter.editCart);
route.delete("/:cart_id", author, CommandCenter.deleteCart);

module.exports = route;
