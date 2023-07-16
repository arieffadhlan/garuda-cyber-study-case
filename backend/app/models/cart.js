"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user"
      });
      this.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product"
      });
    }
  }
  Cart.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "User",
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
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Cart",
  });
  return Cart;
};