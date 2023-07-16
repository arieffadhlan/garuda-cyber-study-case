const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const userRepository = require("../repositories/user-repository");
const ApplicationError = require("../errors/ApplicationError");
const { JWT_SIGNATURE_KEY } = require("../../config/application");
const { checkRequiredData } = require("../../utils/checkRequiredData");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

const checkPassword = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword);
}

const createToken = (payload) => {
  return jwt.sign(payload, JWT_SIGNATURE_KEY, { expiresIn: "24h" });
}

const generateUUIDToken = () => {
  return uuidv4();
}

const register = async (req) => {
  try {
    const { name, username, email, phone_number, address, password } = req.body;
    if (checkRequiredData(req.body)) {
      throw new ApplicationError(422, "Semua data wajib diisi.");
    }
    
    const isUserExist = await userRepository.getUserByEmail(email);
    if (isUserExist) {
      throw new ApplicationError(422, "Email telah terdaftar.");
    }
  
    const encryptedPassword = encryptPassword(password);
    const user = await userRepository.createUser({
      name,
      username,
      email,
      phone_number,
      address,
      password: encryptedPassword,
    });
  
    return user; 
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const verifyAccount = async (req) => {
  try {
    const { token } = req.params;
    
    const user = await userRepository.getUserByToken(token);
    if (!user) {
      throw new ApplicationError(401, "Terjadi kesalahan, silakan coba lagi.");
    }
  
    const newToken = generateUUIDToken();
    return await userRepository.updateUser(user.id, {
      is_verified: true,
      token: newToken
    });
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const login = async (req) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApplicationError(422, "Email dan password wajib diisi.");
    }
  
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new ApplicationError(401, "Identitas tersebut tidak sesuai dengan data kami.");
    }
    
    if (!user.is_verified) {
      throw new ApplicationError(401, "Identitas tersebut tidak sesuai dengan data kami.");
    }
  
    const isPasswordCorrect = checkPassword(password, user.password);
    if (!isPasswordCorrect) {
      throw new ApplicationError(401, "Identitas tersebut tidak sesuai dengan data kami.");
    }
  
    const token = createToken({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      address: user.address
    });

    user.token = token;
  
    return user;  
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const forgotPassword = async (req) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw new ApplicationError(422, "Email wajib diisi.");
    }
  
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new ApplicationError(404, "Alamat email tidak ditemukan.");
    }
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const resetPassword = async (req) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) {
      throw new ApplicationError(422, "Password wajib diisi.");
    }
    
    const user = await userRepository.getUserByToken(token);
    if (!user) {
      throw new ApplicationError(401, "Terjadi kesalahan, silakan coba lagi.");
    }
  
    const newPassword = encryptPassword(password);
    const newToken = generateUUIDToken();
    return await userRepository.updateUser(user.id, {
      password: newPassword,
      token: newToken
    });
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

module.exports = {
  register,
  verifyAccount,
  login,
  forgotPassword,
  resetPassword
}