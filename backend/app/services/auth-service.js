const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/user-repository");
const ApplicationError = require("../errors/ApplicationError");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
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

module.exports = {
  register
}