"use strict";
/** @type {import("sequelize-cli").Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: uuidv4(),
        name: "Admin",
        username: "admin",
        email: "admin@gmail.com",
        phone_number: "08123456789",
        address: "Jalan Medan, Kabupaten Medan Tuntungan, Kecamatan Tanjung Selamat, Kota Medan, Sumatera Utara",
        password: "password",
        is_verified: true,
        role: "Admin",
        token: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "User",
        username: "user",
        email: "user@gmail.com",
        phone_number: "08987654321",
        address: "Jalan Medan, Kabupaten Medan Tuntungan, Kecamatan Tanjung Selamat, Kota Medan, Sumatera Utara",
        password: "password",
        is_verified: true,
        role: "User",
        token: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, { 
      truncate: true, 
      cascade: true ,
      restartIdentity: true
    });
  }
};
