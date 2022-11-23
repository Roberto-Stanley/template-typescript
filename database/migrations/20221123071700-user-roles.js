/* eslint-disable no-undef */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
        },
        key: "id",
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "roles",
          },
        },
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_roles");
    await Sequelize.literal("ALTER SEQUENCE  user_roles_id_seq RESTART WITH 1;");
  },
};
