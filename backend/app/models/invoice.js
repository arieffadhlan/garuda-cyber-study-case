"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    static associate(models) {
      // define association here
    }
  }
  Invoice.init({
    order_id: {
      type: DataTypes.UUID,
      references: {
        model: "Order",
        key: "id"
      }
    },
    voucher_id: {
      type: DataTypes.UUID,
      references: {
        model: "Voucher",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: "Invoice",
  });
  Invoice.beforeCreate((invoice) => {
    invoice.id = uuidv4();
  });
  return Invoice;
};