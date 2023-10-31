'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentEventType extends Model {
    static associate({ StudentsEvent }) {
      this.hasMany(StudentsEvent, { foreignKey: 'studentEventTypeId', as: 'events' });
    }
  }
  StudentEventType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'StudentEventType',
    },
  );
  return StudentEventType;
};
