/* eslint-disable no-undef */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("type_roles", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("type_roles");
    await Sequelize.literal("ALTER SEQUENCE  type_roles_id_seq RESTART WITH 1;");
  },
};
