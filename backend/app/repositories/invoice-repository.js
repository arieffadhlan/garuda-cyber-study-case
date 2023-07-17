const { Invoice } = require("../models");

const addInvoice = (data) => {
  return Invoice.create(data);
}

module.exports = {
  addInvoice
}