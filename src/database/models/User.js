"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      role_id: DataTypes.INTEGER,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      modified_by: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
      timestamps: true,
    }
  );

  return user;
};
