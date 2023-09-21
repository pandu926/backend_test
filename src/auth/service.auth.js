const repo = require("./repo.auth");

const registerService = async (data) => {
  return await repo.registerRepo(data);
};

const service = {
  registerService,
};
module.exports = service;
