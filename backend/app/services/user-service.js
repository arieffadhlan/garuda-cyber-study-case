const userRepository = require("../repositories/user-repository");
const ApplicationError = require("../errors/ApplicationError");
const { checkRequiredData } = require("../../utils/checkRequiredData");

const getUsers = async () => {
  try {
    const users = await userRepository.getUsers();
    if (!users) {
      throw new ApplicationError(404, "User not found.");
    } 
    
    return users;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const getUser = async (id) => {
  try {
    const user = await userRepository.getUser(id);
    if (!user) {
      throw new ApplicationError(404, "User not found.");
    } 
    
    return user;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

const updateUser = async (req) => {
  try {
    const { id } = req.params;
    const { name, phone_number, address } = req.body;

    if (checkRequiredData(req.body)) {
      throw new ApplicationError(422, "All data must be filled in.");
    }

    const user = await getUser(id);
    await userRepository.updateUser(user.id, {
      name,
      phone_number,
      address
    });

    const updatedUser = await getUser(id);

    return updatedUser;
  } catch (error) {
    if (error instanceof ApplicationError) {
      throw new ApplicationError(error.statusCode, error.message);
    } else {
      throw new Error(error.message);
    }
  }
}

module.exports = {
  getUsers,
  getUser,
  updateUser
}