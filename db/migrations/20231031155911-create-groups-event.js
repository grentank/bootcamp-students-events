'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupsEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
      },
      phaseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Phases',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
      },
      groupEventTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'GroupEventTypes',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupsEvents');
  },
};
