"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    static associate(models) {
      this.hasMany(models.Transaction, { 
        foreignKey: "voucher_id",
        as: "transactions"
      });
    }
  }
  Voucher.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    code: DataTypes.CHAR(6),
    expired_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: "Voucher",
  });
  Voucher.beforeCreate((voucher) => {
    voucher.id = uuidv4();
  });
  return Voucher;
};