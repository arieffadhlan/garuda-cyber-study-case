"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.Transaction, { 
        foreignKey: "transaction_id",
        as: "transaction"
      });
      this.belongsTo(models.Product, { 
        foreignKey: "product_id",
        as: "product"
      });
    }
  }
  Order.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    transaction_id: {
      type: DataTypes.UUID,
      references: {
        model: "Transaction",
        key: "id"
      }
    },
    product_id: {
      type: DataTypes.UUID,
      references: {
        model: "Product",
        key: "id"
      }
    },
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "Order",
  });
  Order.beforeCreate((order) => {
    order.id = uuidv4();
  });
  return Order;
};