'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
    static associate({ GroupsEvent }) {
      this.hasMany(GroupsEvent, { foreignKey: 'phaseId', as: 'events' });
    }
  }
  Phase.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Phase',
    },
  );
  return Phase;
};
