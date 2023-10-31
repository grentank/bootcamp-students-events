'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ StudentsEvent }) {
      this.hasMany(StudentsEvent, { foreignKey: 'studentId', as: 'events' });
    }
  }
  Student.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Student',
    },
  );
  return Student;
};
