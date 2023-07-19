const { Order, Product, Transaction } = require("../models");

const getOrders = () => {
  return Order.findAll({
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: Transaction,
        as: "transaction"
      },
      {
        model: Product,
        as: "product",
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      }
    ]
  });
}

const addOrder = (data) => {
  return Order.create(data);
}

module.exports = {
  getOrders,
  addOrder
}