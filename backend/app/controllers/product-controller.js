const productService = require("../services/product-service");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();

    res.status(200).json({
      status: "Success",
      data: products
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProduct(id);

    res.status(200).json({
      status: "Success",
      data: product
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  getProducts,
  getProduct
}