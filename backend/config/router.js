const express = require("express");
const controllers =  require("../app/controllers");
const middlewares = require("../app/middlewares");

const router = express.Router();

// Auth
router.post("/api/v1/register", controllers.authController.register);
router.post("/api/v1/login", controllers.authController.login);

module.exports = router;