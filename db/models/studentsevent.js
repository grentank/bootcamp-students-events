'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentsEvent extends Model {
    static associate({ Student, Group, StudentEventType }) {
      this.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });
      this.belongsTo(Group, { foreignKey: 'groupId', as: 'group' });
      this.belongsTo(StudentEventType, { foreignKey: 'studentEventTypeId', as: 'type' });
    }
  }
  StudentsEvent.init(
    {
      studentId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
      studentEventTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StudentsEvent',
    },
  );
  return StudentsEvent;
};
