'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('tasks', [
      {id: 1, description: 'Grabar el curso de backrend', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, description: 'Editar los videos del curso de Backend', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, description: 'Subir los videos', createdAt: new Date(), updatedAt: new Date()}
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('tasks', null, {});
     
  }
};
