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

const getCart = async (id) => {
  try {
    const cart = await cartRepository.getCart(id);
    if (!cart) {
      throw new ApplicationError(404, "Data keranjang tidak ditemukan.");
    } 
    
    return cart;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const addToCart = async (req) => {
  try {
    const { productId, quantity } = req.body;
    const { id } = req.user;

    const cart = await cartRepository.addToCart({
      user_id: id,
      product_id: productId,
      quantity
    });
    
    return cart;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const removeFromCart = async (id) => {
  try {
    const cart = await getCart(id);
    return await cartRepository.removeFromCart(cart.id);
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

module.exports = {
  getCartByUser,
  addToCart,
  removeFromCart
}