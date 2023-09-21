const express = require("express");
const authRoute = express.Router();
const controller = require("./controller.auth");
const tokenVerification = require("../middleware/tokenVerification");

authRoute.get("/auth", (req, res) => {
  return res.send("pandu");
});

authRoute.post("/auth/register", controller.registerController);
authRoute.post("/auth/login", controller.loginController);
authRoute.post("/auth/forget_password", controller.forgetController);

module.exports = authRoute;
