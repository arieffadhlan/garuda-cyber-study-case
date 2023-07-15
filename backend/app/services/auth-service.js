const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/user-repository");
const ApplicationError = require("../errors/ApplicationError");
const { JWT_SIGNATURE_KEY } = require("../../config/application");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

const checkPassword = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword);
}

const createToken = (payload) => {
  return jwt.sign(payload, JWT_SIGNATURE_KEY, { expiresIn: "24h" });
}

const checkRequiredData = (data) => {
  Object.values(data).every((value) => {
    if (value === null || value === "") {
      return true;
    }
    
    return false;
  });
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
  
    // Send otp to email
    await mailService.sendMail(email, "Verifikasi Akun",
      `
        <div style="font-size: 14px;">
          <span>Halo ${name},</span> <br /><br />
          <span>
            Terima kasih telah mendaftar. 
            Sebelum lanjut, Anda harus melakukan verifikasi akun terlebih dahulu. Untuk menyelesaikan tahap registrasi, silakan klik link verifikasi akun dibawah ini:
          </span>
          <br /><br />
          <a href="http://localhost:8000/auth/verify/${user.token}" style="color: #222">Verifikasi Akun</a> <br /><br />
          <span>Jika Anda tidak membuat akun, maka Anda tidak perlu melakukan apapun dan silakan abaikan email ini.</span> <br /><br />
          <span>Terima kasih.</span>
        </div>
      `
    );
  
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
  
    // Send password reset link to email
    return await mailService.sendMail(email, "Reset Password",
      `
        <div style="font-size: 14px;">
          <span>Hai ${user.name},</span> <br /> <br />
          <span>Anda menerima email ini karena kami menerima permintan untuk mengatur ulang password akun Anda. Silakan klik link di bawah untuk mengatur ulang password Anda.</span> <br /> <br />
          <a href="https://shinzou-app.vercel.app/auth/reset-password/${user.token}" style="color: #222">Reset Password</a> <br /> <br />
          <span>Jika Anda tidak meminta pengaturan ulang password, maka Anda tidak perlu melakukan apapun dan silakan abaikan email ini.</span> <br /> <br />
          <span>Terima kasih,</span> <br />
          <span>Tim Shinzou</span>
        </div>
      `
    );
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
  login,
  forgotPassword
}