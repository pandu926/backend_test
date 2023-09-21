require("dotenv");
const service = require("./service.auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const data_user = req.body;
  const { username } = req.body;
  const userData = await service.loginService(username);
  if (userData) {
    return res.status(403).json({
      msg: "username telah terdaftar",
    });
  }
  const registerData = await service.registerService(data_user);
  if (registerData) {
    return res.status(200).json({
      msg: "register succes",
      registerData,
    });
  }
  res.status(400).send({
    msg: "error",
  });
};

const loginController = async (req, res) => {
  const { username, password } = req.body;
  const userData = await service.loginService(username);
  if (!userData) {
    return res.status(404).send({
      msg: "data tidak ada",
    });
  }

  const isPassword = await bcrypt.compare(password, userData.password);

  if (isPassword) {
    const token = await jwt.sign(
      {
        id: userData.id,
        nama: userData.name,
      },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      accessToken: token,
    });
  } else {
    return res.status(403).send({
      msg: "password salah",
    });
  }
};

const forgetController = async (req, res) => {
  const { token } = req.body;
  const newPassword = req.body.password;
  const data = await service.forgetService(token);
  if (data) {
    const changePassword = await service.editService(data, newPassword);
    return res.status(200).json({ msg: "password telah dirubah" });
  }
  return res.status(403).json({ msg: "tidak valid" });
};

const controller = { forgetController, registerController, loginController };

module.exports = controller;
