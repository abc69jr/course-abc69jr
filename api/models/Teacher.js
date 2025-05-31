/**
 * Teacher.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // id: {
    //   type: 'string',
    //   columnName: '_id',
    //   unique: true,
    //   required: true,
    // },

    name: { 
      type: 'string',
      required: true,
    },

    image: { type: 'string' },

    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true, // Kiểm tra định dạng email
      description: 'Email của người dùng',
      example: 'abc@gmail.com'
    },

    birthdate: {
      type: 'ref',         
      columnType: 'datetime', 
      required: true,
      description: 'Ngày sinh của người dùng',
      example: '1990-01-01T00:00:00Z'
    }


  },

  migrate: 'alter'
};

