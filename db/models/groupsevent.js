'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupsEvent extends Model {
    static associate({ Group, Phase, GroupEventType }) {
      this.belongsTo(Group, { foreignKey: 'groupId', as: 'group' });
      this.belongsTo(Phase, { foreignKey: 'phaseId', as: 'phase' });
      this.belongsTo(GroupEventType, {
        foreignKey: 'groupEventTypeId',
        as: 'type',
      });
    }
  }
  GroupsEvent.init(
    {
      groupId: DataTypes.INTEGER,
      phaseId: DataTypes.INTEGER,
      groupEventTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GroupsEvent',
    },
  );
  return GroupsEvent;
};
