const service = require("./service.user");

const getUserController = async (req, res) => {
  const data = await service.getUserService();
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).send("not found");
};

const getUserSingleController = async (req, res) => {
  let { id } = req.query;

  if (typeof id == "undefined") {
    return res.send("salah format url");
  }
  const data = await service.getUserSingleService(id);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).send("not found");
};

const controller = { getUserController, getUserSingleController };
module.exports = controller;
