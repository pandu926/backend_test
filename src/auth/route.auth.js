const express = require("express");
const authRoute = express.Router();
const controller = require("./controller.auth");
const tokenVerification = require("../middleware/tokenVerification");

authRoute.get("/auth", (req, res) => {
  return res.send("pandu");
});

authRoute.post("/auth/register", controller.registerController);
// userRoute.get("/user/:id", controller.getUserSingleController);
// userRoute.put("/user/update", tokenVerification, controller.updateController);
// userRoute.delete("/user/delete/:id", controller.deleteController);
// userRoute.post("/user/login", authController);

module.exports = authRoute;
