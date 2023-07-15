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

module.exports = router;