"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    token: DataTypes.UUID
  }, {
    sequelize,
    modelName: "User",
  });
  User.beforeCreate((user) => {
    user.id = uuidv4();
    user.token = uuidv4();
  });
  return User;
};