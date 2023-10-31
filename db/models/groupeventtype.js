'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupEventType extends Model {
    static associate({ GroupsEvent }) {
      this.hasMany(GroupsEvent, { foreignKey: 'groupEventType', as: 'events' });
    }
  }
  GroupEventType.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GroupEventType',
    },
  );
  return GroupEventType;
};
