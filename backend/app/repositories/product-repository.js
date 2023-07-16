const { Product } = require("../models");

const getProducts = () => {
  return Product.findAll();
}

const getProduct = (id) => {
  return Product.findByPk(id);
}

const addProduct = (data) => {
  return Product.create(data);
}

const updateProduct = (id, data) => {
  return Product.update(data, 
    { where: { id } 
  });
}

const deleteProduct = (id) => {
  return Product.destroy({ where: { id } });
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}