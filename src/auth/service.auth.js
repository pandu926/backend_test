const repo = require("./repo.auth");
const bcrypt = require("bcrypt");

const registerService = async (data_user) => {
  const password = data_user.password;
  const username = data_user.username;
  const hashPassword = await bcrypt.hash(password, 10);
  return await repo.registerRepo(data_user, hashPassword);
};

const loginService = async (username) => {
  return await repo.loginRepo(username);
};

const forgetService = async (token) => {
  return await repo.forgetRepo(token);
};

const editService = async (data, newPassword) => {
  const hashPassword = await bcrypt.hash(newPassword, 10);
  return await repo.editRepo(data, hashPassword);
};

const service = {
  editService,
  forgetService,
  registerService,
  loginService,
};
module.exports = service;
