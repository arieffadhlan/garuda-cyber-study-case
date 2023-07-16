"use strict";
/** @type {import("sequelize-cli").Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        id: uuidv4(),
        name: "Eiger Core 15 Laptop",
        description: "Tas backpack yang cocok untuk membawa laptop Anda kemanapun dengan aman.",
        price: 350000,
        stock: 20,
        image: "https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/9/1/910005958.BLK.1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Eiger Hydra 15",
        description: "Tas backpack yang didesain untuk dapat dengan mudah mengakses air minum pada saat bersepeda.",
        price: 400000,
        stock: 15,
        image: "https://thumbor.sirclocdn.com/unsafe/640x640/filters:format(webp)/magento.eigeradventure.com/media/catalog/product/cache/cd1064cf96e0921aa13324f8e3f8fe30/t/a/tas-ransel-hydropack-hydra-15.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, { 
      truncate: true, 
      cascade: true ,
      restartIdentity: true
    });
  }
};
