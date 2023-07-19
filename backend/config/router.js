const express = require("express");
const controllers =  require("../app/controllers");
const middlewares = require("../app/middlewares");

const router = express.Router();

// Auth
router.get("/api/v1/verify/:token", controllers.authController.verifyAccount);
router.post("/api/v1/register", controllers.authController.register);
router.post("/api/v1/login", controllers.authController.login);
router.post("/api/v1/forgot-password", controllers.authController.forgotPassword);
router.post("/api/v1/reset-password/:token", controllers.authController.resetPassword);

// User
router.get("/api/v1/user", middlewares.authorize, controllers.userController.getUsers);
router.get("/api/v1/user/:id", middlewares.authorize, controllers.userController.getUser);

// Product
router.get("/api/v1/product", controllers.productController.getProducts);
router.get("/api/v1/product/:id", controllers.productController.getProduct);
router.post("/api/v1/product", middlewares.authorize, controllers.productController.addProduct);
router.put("/api/v1/product/:id", middlewares.authorize, controllers.productController.updateProduct);
router.delete("/api/v1/product/:id", middlewares.authorize, controllers.productController.deleteProduct);

// Transaction
router.get("/api/v1/transaction", middlewares.authorize, controllers.transactionController.getTransactions);
router.post("/api/v1/transaction", middlewares.authorize, controllers.transactionController.addTransaction);

module.exports = router;