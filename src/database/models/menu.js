"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      path: DataTypes.STRING,
      level: DataTypes.STRING,
      parent_id: DataTypes.INTEGER,
      is_menu: DataTypes.STRING,
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
      modelName: "Menu",
    }
  );
  return Menu;
};
