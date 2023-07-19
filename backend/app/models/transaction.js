"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      this.hasMany(models.Order, { 
        foreignKey: "transaction_id",
        as: "orders"
      });
      this.belongsTo(models.User, { 
        foreignKey: "user_id",
        as: "user"
      });
      this.belongsTo(models.Voucher, { 
        foreignKey: "voucher_id",
        as: "voucher"
      });
    }
  }
  Transaction.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "User",
        key: "id"
      }
    },
    voucher_id: {
      type: DataTypes.UUID,
      references: {
        model: "Voucher",
        key: "id"
      }
    },
    code: DataTypes.CHAR(14),
    ammount: DataTypes.INTEGER,
    payment_method: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Transaction",
  });
  Transaction.beforeCreate((transaction) => {
    transaction.id = uuidv4();
  });
  return Transaction;
};