const authService = require("../services/auth-service");

const register = async (req, res) => {
  try {
    const user = await authService.register(req);

    res.status(201).json({
      status: "Success",
      message: "Registration has been successful.",
      data: user
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

const login = async (req, res) => {
  try {
    const user = await authService.login(req);
    
    res.status(201).json({
      status: "Success",
      message: "Login has been successful.",
      data: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone_number: user.phone_number,
        address: user.address,
        token: user.token,
      }
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  register,
  login
}