const { Cart } = require("../models");

async function author(req, res, next) {
  let { cart_id } = req.params;
  try {
    const cart = await Cart.findByPk(cart_id);
    if (!cart) throw { status: 400, msg: "Cart not found" };
    else if (cart.user_id === req.data.id) next();
    else throw { status: 403, msg: "Unauthorized" };
  } catch (err) {
    next(err);
  }
}

module.exports = author;
