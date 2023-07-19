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
    const { name, email, phone_number, address, password } = req.body;
    if (checkRequiredData(req.body)) {
      throw new ApplicationError(422, "All data must be filled in.");
    }
    
    const isUserExist = await userRepository.getUserByEmail(email);
    if (isUserExist) {
      throw new ApplicationError(422, "Email has been registered.");
    }
  
    const encryptedPassword = encryptPassword(password);
    const user = await userRepository.createUser({
      name,
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

const login = async (req) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApplicationError(422, "Email and password are required.");
    }
  
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new ApplicationError(401, "The identity does not match our data.");
    }
    
    if (!user.is_verified) {
      throw new ApplicationError(401, "The identity does not match our data.");
    }
  
    const isPasswordCorrect = checkPassword(password, user.password);
    if (!isPasswordCorrect) {
      throw new ApplicationError(401, "The identity does not match our data.");
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

module.exports = {
  register,
  login
}