"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      permission_level: DataTypes.STRING,
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
      modified_by: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Role",
      paranoid: true,
      timestamps: true,
    }
  );
  return Role;
};
