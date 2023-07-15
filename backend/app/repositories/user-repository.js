const { User } = require("../models");

const getUsers = () => {
  return User.findAll();
}

const getUser = (id) => {
  return User.findByPk(id);
}

const getUserByEmail = (email) => {
  return User.findOne({
    where: { email }
  });
}

const getUserByToken = (token) => {
  return User.findOne({
    where: { token }
  });
}

const createUser = (data) => {
  return User.create(data);
}

const updateUser = (id, data) => {
  return User.update(data, {
    where: { id }
  });
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  getUserByToken,
  createUser,
  updateUser
}