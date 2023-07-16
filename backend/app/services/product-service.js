const productRepository = require("../repositories/product-repository");
const ApplicationError = require("../errors/ApplicationError");

const getProducts = async () => {
  try {
    const products = await productRepository.getProducts();    
    return products;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const getProduct = async (id) => {
  try {
    const product = await productRepository.getProduct(id);
    if (!product) {
      throw new ApplicationError(404, "Produk tidak ditemukan.");
    } 
    
    return product;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

module.exports = {
  getProducts,
  getProduct
}