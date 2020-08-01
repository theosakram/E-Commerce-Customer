const { Cart, Category, Product, User } = require("../models");
const { compare } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");

class CommandCenter {
  // USER
  static async register(req, res, next) {
    let { name, email, role, password } = req.body;
    try {
      const user = await User.create({ name, email, role, password });
      res.status(201).json({
        msg: "User registered successfully",
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    let { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        if (compare(password, user.password)) {
          const access_token = createToken({
            id: user.id,
            email: user.email,
            role: user.role,
          });
          res.status(200).json({
            msg: "User logged in successfully",
            access_token,
            name: user.name,
            id: user.id,
          });
        } else throw { status: 400, msg: "Wrong email/ password" };
      } else throw { status: 400, msg: "User not found" };
    } catch (err) {
      next(err);
    }
  }

  //CATEGORY
  static async getCategory(req, res, next) {
    try {
      const category = await Category.findAll();
      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }

  //PRODUCTS
  static async getProduct(req, res, next) {
    try {
      const product = await Product.findAll({
        include: [{ model: Category }],
        order: [["name", "ASC"]],
      });
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  //CART
  static async addCart(req, res, next) {
    let { user_id } = req.params;
    let { product_id } = req.body;
    try {
      const product = await Product.findByPk(product_id);
      if (product) {
        if (product.stock === 0) {
          throw { status: 400, msg: "Product is not available" };
        } else {
          const search = await Cart.findOne({
            where: { user_id, product_id, status: false },
          });
          if (search) {
            let edited = {
              quantity: search.quantity + 1,
            };
            const newCart = await Cart.update(edited, {
              where: { product_id },
            });
            res.status(200).json({ msg: "Item added to Cart" });
          } else {
            const cart = await Cart.create({
              user_id,
              product_id,
              quantity: 1,
              status: false,
            });
            res.status(200).json(cart);
          }
        }
      } else throw { status: 400, msg: "Product not found" };
    } catch (err) {
      next(err);
    }
  }

  static async getCart(req, res, next) {
    let { user_id } = req.params;
    try {
      const cart = await Cart.findAll({
        where: { user_id, status: false },
        include: [{ model: Product }],
      });
      res.status(200).json(cart);
    } catch (err) {
      next(err);
    }
  }

  static async editCart(req, res, next) {
    let { cart_id } = req.params;
    let { newQuantity } = req.body;
    try {
      let updated = {
        quantity: newQuantity,
      };
      const cart = await Cart.update(updated, { where: { id: cart_id } });
      res.status(200).json({ msg: "Cart edited successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async checkout(req, res, next) {
    let { id } = req.data;
    try {
      const targets = await Cart.findAll({
        where: { user_id: id, status: false },
      });
      if (targets) {
        for (let i = 0; i < targets.length; i++) {
          const targetProduct = await Product.findByPk(targets[i].product_id);

          const bought = await Product.update(
            { stock: targetProduct.stock - targets[i].quantity },
            { where: { id: targets[i].product_id } }
          );

          const cart = await Cart.update(
            { status: true },
            { where: { id: targets[i].id } }
          );
        }
        res.status(200).json({ msg: "Item(s) bought successfully" });
      } else throw { status: 400, msg: "Cart not found" };
    } catch (err) {
      next(err);
    }
  }

  static async transactionHistory(req, res, next) {
    let { id } = req.data;
    try {
      const bought = await Cart.findAll({
        where: { user_id: id, status: true },
        include: [{ model: Product }],
      });
      res.status(200).json(bought);
    } catch (err) {
      next(err);
    }
  }

  static async deleteCart(req, res, next) {
    let { cart_id } = req.params;
    try {
      const deleted = await Cart.destroy({ where: { id: cart_id } });
      res.status(200).json({ msg: "Cart deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CommandCenter;
