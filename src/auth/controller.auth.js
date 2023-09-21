require("dotenv");
const service = require("./service.auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const data = req.body;
  const registerData = await service.registerService(data);
  if (registerData) {
    return res.status(200).send({
      msg: "register succes",
    });
  }
  res.status(400).send({
    msg: "error",
  });
};

const controller = {
  registerController,
};

module.exports = controller;
