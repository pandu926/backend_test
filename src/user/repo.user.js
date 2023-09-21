const { user } = require("../database/models");

const getUserRepo = async () => {
  return await user.findAll();
};

const getUserSingleRepo = async (id) => {
  return await user.findAll({ where: { id } });
};

const repo = { getUserRepo, getUserSingleRepo };

module.exports = repo;
