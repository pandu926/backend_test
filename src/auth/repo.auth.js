const { user } = require("../database/models");

const registerRepo = async (data) => {
  console.log(data);
};

const repo = { registerRepo };
module.exports = repo;
