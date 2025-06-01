// api/helpers/customresponse.js

module.exports = {
  friendlyName: 'Custom Response',

  description: 'Trả về response chuẩn REST',

  inputs: {
    res: {
      type: 'ref',
      required: true,
      description: 'Đối tượng response của Sails (tương tự Express)'
    },
    data: {
      type: 'ref',
      defaultsTo: {}
    },
    message: {
      type: 'string',
      defaultsTo: 'Success'
    },
    statusCode: {
      type: 'number',
      defaultsTo: 200
    }
  },

  // fn: async function (inputs, exits) {
  //   const { res, data, message, statusCode } = inputs;

  //   return exits.success(
  //     res.status(statusCode).json({
  //       success: statusCode >= 200 && statusCode < 300,
  //       message,
  //       data
  //     })
  //   );
  // }

  fn: async function (inputs) {
  const { res, data, message, statusCode } = inputs;

  console.log('Custom Response:', {
    statusCode,
    message,
    data
  });
  return res.status(statusCode).json({
    
    success: statusCode >= 200 && statusCode < 300,
    message,
    data: data || null
  });
}

};
