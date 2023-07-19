const transactionService = require("../services/transaction-service");

const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getTransactions();

    res.status(200).json({
      status: "Success",
      data: transactions
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

const addTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.addTransaction(req);

    res.status(200).json({
      status: "Success",
      message: "Transaction data has been successfully saved.",
      data: transaction
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  getTransactions,
  addTransaction
}