const cartRepository = require("../repositories/cart-repository");
const ApplicationError = require("../errors/ApplicationError");

const getCartByUser = async (req) => {
  try {
    const { userId } = req.params;

    const userCart = await cartRepository.getCartByUser(userId);    
    if (!userCart) {
      throw new ApplicationError(404, "Data keranjang tidak ditemukan.");
    } 
    
    return userCart;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

module.exports = {
  getCartByUser
}