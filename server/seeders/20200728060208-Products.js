"use strict";
const fs = require("fs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let productList = JSON.parse(fs.readFileSync("./product.json", "utf-8"));

    for (let i = 0; i < productList.length; i++) {
      productList[i].createdAt = new Date();
      productList[i].updatedAt = new Date();
    }

    await queryInterface.bulkInsert("Products", productList, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
