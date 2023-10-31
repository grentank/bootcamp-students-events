'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({ GroupsEvent, StudentsEvent }) {
      this.hasMany(GroupsEvent, { foreignKey: 'groupId', as: 'events' });
      this.hasMany(StudentsEvent, { foreignKey: 'groupId', as: 'studentsEvents' });
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Group',
    },
  );
  return Group;
};
