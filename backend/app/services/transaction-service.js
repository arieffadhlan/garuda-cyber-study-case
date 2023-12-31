const dayjs = require("dayjs");
const orderRepository = require("../repositories/order-repository");
const productRepository = require("../repositories/product-repository");
const transactionRepository = require("../repositories/transaction-repository");
const voucherRepository = require("../repositories/voucher-repository");
const ApplicationError = require("../errors/ApplicationError");

const generateCode = (length, prepend = "") => {
  const char = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let code = `${prepend}`;

  for (let i = 0; i < length; i++) {
    code += char[(Math.floor(Math.random() * char.length))];
  }

  return code;
}

const getTransactions = async () => {
  try {
    const transactions = await transactionRepository.getTransactions();

    return transactions;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const addTransaction = async (req) => {
  try {
    const { cart, ammount, paymentMethod } = req.body;
    const { id } = req.user;
    const transactionCode = generateCode(8, dayjs(new Date()).format("DDMMYY"));

    // Add a voucher if the purchase is more than 2 million
    let voucher = null;
    if (ammount > 2000000) {
      voucher = await voucherRepository.addVoucher({
        code: generateCode(6),
        expired_date: dayjs(new Date()).add(3, "day")
      });
    }
    
    // Save transaction
    const transaction = await transactionRepository.addTransaction({
      user_id: id,
      voucher_id: voucher ? voucher.id : null,
      code: transactionCode,
      ammount,
      payment_method: paymentMethod
    });

    await Promise.all(cart.map(async (item) => {
      // Reduce product stock
      const product = await productRepository.getProduct(item.productId);
      await productRepository.updateProduct(product.id, {
        stock: product.stock -= item.quantity
      });

      // Add order
      await orderRepository.addOrder({
        transaction_id: transaction.id,
        product_id: item.productId,
        quantity: item.quantity
      });
    }));
    
    return transaction;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

module.exports = {
  getTransactions,
  addTransaction
}