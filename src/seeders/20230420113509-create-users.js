'use strict';
const bcryptjs = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John Doe",
          email: "john@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: "Maria",
          email: "maria@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: "José",
          email: "jose@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );

	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {});
  
	}
};
