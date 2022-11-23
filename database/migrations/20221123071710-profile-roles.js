/* eslint-disable no-undef */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profile_roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "profiles",
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
    await queryInterface.dropTable("profile_roles");
    await Sequelize.literal(
      "ALTER SEQUENCE  profile_roles_id_seq RESTART WITH 1;"
    );
  },
};
