'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role_menu.init({
    role_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    is_active: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role_menu',
  });
  return role_menu;
};