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

const getCart = (id) => {
  return Cart.findOne({
    where: { id },
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

const addToCart = (data) => {
  return Cart.create(data);
}

const removeFromCart = (id) => {
  return Cart.destroy({ where: { id } });
}

module.exports = {
  getCartByUser,
  getCart,
  addToCart,
  removeFromCart
}