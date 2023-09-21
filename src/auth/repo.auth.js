const { user } = require("../database/models");

const registerRepo = async (data_user, hashPassword) => {
  const password = hashPassword;
  const { username, name, description, token, email, phone, role_id } =
    data_user;

  return await user.create({
    username,
    name,
    description,
    email,
    phone,
    token,
    password,
    role_id,
  });
};

const loginRepo = async (username) => {
  return await user.findOne({ where: { username } });
};

const forgetRepo = async (token) => {
  return await user.findOne({ where: { token } });
};

const editRepo = async (data, hashPassword) => {
  const password = hashPassword;
  const { username, name, description, token, email, phone, role_id } = data;
  return await user.update(
    {
      username,
      name,
      description,
      email,
      phone,
      token,
      password,
      role_id,
    },
    {
      where: {
        token,
      },
    }
  );
};

const repo = { forgetRepo, registerRepo, loginRepo, editRepo };
module.exports = repo;
