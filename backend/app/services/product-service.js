const productRepository = require("../repositories/product-repository");
const ApplicationError = require("../errors/ApplicationError");
const { checkRequiredData } = require("../../utils/checkRequiredData");

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

const addProduct = async (req) => {
  try {
    if (checkRequiredData(req.body)) {
      throw new ApplicationError(422, "Semua data wajib diisi.");
    }

    const product = await productRepository.addProduct(req.body);
    
    return product;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const updateProduct = async (req) => {
  try {
    const { id } = req.params;

    if (checkRequiredData(req.body)) {
      throw new ApplicationError(422, "Semua data wajib diisi.");
    }

    const product = await getProduct(id);
    return await productRepository.updateProduct(product.id, req.body);
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
  getProduct,
  addProduct,
  updateProduct
}