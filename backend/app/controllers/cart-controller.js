const cartService = require("../services/cart-service");

const getCartByUser = async (req, res) => {
  try {
    const userCart = await cartService.getCartByUser(req);

    res.status(200).json({
      status: "Success",
      data: userCart
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

const addToCart = async (req, res) => {
  try {
    const cart = await cartService.addToCart(req);

    res.status(201).json({
      status: "Success",
      message: "Data keranjang telah berhasil ditambahkan.",
      data: cart
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  getCartByUser,
  addToCart
}