const express = require("express");
const userRoute = express.Router();
const controller = require("./controller.user");
const tokenVerification = require("../middleware/tokenVerification");

userRoute.get("/user", (req, res) => {
  return res.send("pandu");
});

userRoute.get("/user", controller.getUserController);
userRoute.get("/user/detail", controller.getUserSingleController);

module.exports = userRoute;
