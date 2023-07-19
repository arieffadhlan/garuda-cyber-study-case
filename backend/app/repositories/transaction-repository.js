const { Order, Product, Transaction, User, Voucher } = require("../models");

const getTransactions = () => {
  return Transaction.findAll({
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        as: "user",
        attributes: {
          exclude: ["password", "is_verified", "role", "createdAt", "updatedAt"]
        }
      },
      {
        model: Voucher,
        as: "voucher",
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      },
      {
        model: Order,
        as: "orders",
        include: [
          {
            model: Product,
            as: "product",
            attributes: {
              exclude: ["createdAt", "updatedAt"]
            }
          }
        ]
      }
    ]
  });
}

const addTransaction = (data) => {
  return Transaction.create(data);
}

module.exports = {
  getTransactions,
  addTransaction,
}