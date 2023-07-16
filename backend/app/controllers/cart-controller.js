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

module.exports = {
  getCartByUser
}