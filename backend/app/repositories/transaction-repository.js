const { Transaction } = require("../models");

const addTransaction = (data) => {
  return Transaction.create(data);
}

const updateTransactionByCode = (booking_code, data) => {
  return Transaction.update(data, 
    { where: { booking_code } 
  });
}

module.exports = {
  addTransaction,
  updateTransactionByCode
}