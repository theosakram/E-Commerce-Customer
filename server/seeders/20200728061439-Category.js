"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let categories = [
      {
        name: "Figma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nendoroid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PPP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "1-7 Scale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "1-4 Scale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Categories", categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
