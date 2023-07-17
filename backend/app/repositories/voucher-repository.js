const { Voucher } = require("../models");

const addVoucher = (data) => {
  return Voucher.create(data);
}

module.exports = {
  addVoucher
}