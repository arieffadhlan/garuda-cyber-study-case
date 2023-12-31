"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      transaction_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Transactions",
          key: "id"
        }
      },
      product_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Products",
          key: "id"
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  }
};