/**
 * Course.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// const { v4: uuidv4 } = require('uuid');
//cmd: sails generate model Course name:string description:string image:string

module.exports = {

  // -----------set id for object (default auto increment) ---------
  // primaryKey: 'id',

  attributes: {
    id: {
      type: 'string',
      columnName: '_id',
      unique: true,
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      allowNull: true,
    },
  },

  // ---------- create a UUID for each course before saving to the database ----------
  // beforeCreate: function (user, proceed) {
  //   if (!user.id) {
  //     user.id = uuidv4(); // Tự tạo UUID trước khi lưu
  //   }
  //   return proceed();
  // },
   migrate: 'alter'
};

