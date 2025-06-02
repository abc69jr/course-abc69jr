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
      custom: function(value) {
        const date = new Date(value);
        if (isNaN(date.getTime())) return false;

        const today = new Date();
        if (date > today) return false;

        const age = today.getFullYear() - date.getFullYear();
        if (age < 0 || age > 120) return false;

        return true;
      },
      description: 'Ngày sinh của người dùng',
      example: '1990-01-01T00:00:00Z'
    }


  },

  migrate: 'alter'
};

