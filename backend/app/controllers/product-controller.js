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

const addProduct = async (req, res) => {
  try {
    const product = await productService.addProduct(req);

    res.status(201).json({
      status: "Success",
      message: "Data produk telah berhasil ditambahkan.",
      data: product
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

const updateProduct = async (req, res) => {
  try {
    await productService.updateProduct(req);

    res.status(200).json({
      status: "Success",
      message: "Data produk telah berhasil diperbarui.",
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);

    res.status(200).json({
      status: "Success",
      message: "Data produk telah berhasil dihapus.",
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
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}