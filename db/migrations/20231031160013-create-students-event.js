'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentsEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
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
      studentEventTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'StudentEventTypes',
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
    await queryInterface.dropTable('StudentsEvents');
  },
};
