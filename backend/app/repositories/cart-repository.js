const { Cart, Product, User } = require("../models");

const getCartByUser = (userId) => {
  return Cart.findAll({
    where: {
      user_id: userId
    },
    include: [
      {
        model: User,
        as: "user"
      },
      {
        model: Product,
        as: "product"
      }
    ]
  });
}

const addCart = (data) => {
  return Cart.create(data);
}

const deleteCart = (id) => {
  return Cart.destroy({ where: { id } });
}

module.exports = {
  getCartByUser,
  addCart,
  deleteCart
}