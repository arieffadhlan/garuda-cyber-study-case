const { Order } = require("../models");

const addOrder = (data) => {
  return Order.create(data);
}

module.exports = {
  addOrder
}