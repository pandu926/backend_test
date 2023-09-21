const repo = require("./repo.user");

const getUserService = async () => {
  return await repo.getUserRepo();
};

const getUserSingleService = async (id) => {
  return await repo.getUserSingleRepo(id);
};

const service = { getUserService, getUserSingleService };

module.exports = service;
