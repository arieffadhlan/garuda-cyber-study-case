"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Invoices", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      order_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Orders",
          key: "id"
        }
      },
      voucher_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Vouchers",
          key: "id"
        }
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
    await queryInterface.dropTable("Invoices");
  }
};