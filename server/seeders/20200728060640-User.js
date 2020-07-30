"use strict";

const { hash } = require("../helper/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let user = {
      name: "Dummy User",
      email: "dummy@dummy.dummy",
      password: hash("dummy"),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await queryInterface.bulkInsert("Users", [user], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
