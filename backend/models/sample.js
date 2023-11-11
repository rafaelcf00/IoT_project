'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sample extends Model {
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