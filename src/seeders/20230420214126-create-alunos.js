'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Felipe',
        sobrenome: 'Souza',
        idade: 13,
        email: 'felipe@gmail.com',
        peso: 50.6,
        altura: 1.51,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria',
        sobrenome: 'Clara',
        idade: 11,
        email: 'maria@gmail.com',
        peso: 31.6,
        altura: 1.43,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Jamile',
        sobrenome: 'Cerqueira',
        idade: 14,
        email: 'jamile@gmail.com',
        peso: 48.6,
        altura: 1.53,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('alunos', null, {});
    
  }
};
