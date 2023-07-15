const authService = require("../services/auth-service");

const register = async (req, res) => {
  try {
    const user = await authService.register(req);

    res.status(201).json({
      status: "Success",
      message: "Tautan verifikasi telah dikirim.",
      data: user
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  register
}