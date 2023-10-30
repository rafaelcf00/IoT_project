'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sample.init({
    name: DataTypes.STRING,
    temperature: DataTypes.DECIMAL,
    ph: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sample',
  });
  return sample;
};