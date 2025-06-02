/**
 * TeacherController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
//     create: async function (req, res) {
//     try {
//       const data = await TeacherService.create(req.body);
//       return res.customResponse(data, 'Teacher created successfully');
//     } catch (err) {
//       return res.customResponse(null, err.message || 'Something went wrong', 500);
//     }
//   },
create: async function (req, res) {
  try {
    const data = await TeacherService.create(req.body);
    return sails.helpers.customresponse.with({
      res,
      data,
      message: 'Teacher created successfully',
      statusCode: 201
    });
  } catch (err) {
    console.error('Error creating teacher:', err);
    return sails.helpers.customresponse.with({
      res,
      data: null,
      message: err.message || 'Something went wrong',
      statusCode: err.status || 500
    });
  }
},

  // FIND ALL
  findAll: async function (req, res) {
    try {
      const data = await TeacherService.findAll();
      return sails.helpers.customresponse.with({
        res,
        data,
        message: 'List of teachers',
        statusCode: 200
      });
    } catch (err) {
      console.error('Error finding teachers:', err);
      return sails.helpers.customresponse.with({
        res,
        data: null,
        message: err.message || 'Something went wrong',
        statusCode: err.status || 500
      });
    }
  },

  // FIND BY ID
  findByID: async function (req, res) {
    try {
      const id = req.params.id;
      const data = await TeacherService.findById(id);

      // if (!data) {
      //   return sails.helpers.customresponse.with({
      //     res,
      //     data: null,
      //     message: 'Teacher not found',
      //     statusCode: 400
      //   });
      // }

      return sails.helpers.customresponse.with({
        res,
        data,
        message: 'Teacher details',
        statusCode: 200
      });
    } catch (err) {
      console.error('Error finding teacher by ID:', err);
      return sails.helpers.customresponse.with({
        res,
        data: null,
        message: err.message || 'Something went wrong',
        statusCode: err.statusCode || 500
      });
    }
  },

  // UPDATE
  update: async function (req, res) {
    try {
      const id = req.params.id;
      const updated = await TeacherService.update(id, req.body);

      return sails.helpers.customresponse.with({
        res,
        data: updated,
        message: 'Teacher updated successfully',
        statusCode: 200
      });
    } catch (err) {
      console.error('Error updating teacher:', err);
      return sails.helpers.customresponse.with({
        res,
        data: null,
        message: err.message || 'Something went wrong',
        statusCode: err.status || 500
      });
    }
  },

  // DELETE
  delete: async function (req, res) {
    try {
      const id = req.params.id;
      const deleted = await TeacherService.delete(id);

      return sails.helpers.customresponse.with({
        res,
        data: deleted,
        message: 'Teacher deleted successfully',
        statusCode: 200
      });
    } catch (err) {
      console.error('Error deleting teacher:', err);
      return sails.helpers.customresponse.with({
        res,
        data: null,
        message: err.message || 'Something went wrong',
        statusCode: err.status || 500
      });
    }
  },

  findByNameAndAge: async function (req, res) {
  try {
    const { name, age } = req.query; // hoặc req.body nếu dùng POST

    // const results = await Teacher.find({
    //   where: {
    //     and: [
    //       { gender: 'male' },
    //       {
    //         or: [
    //           { name: 'Nam' },
    //           { yearOfBirth: targetYearOfBirth }
    //         ]
    //       }
    //     ]
    //   }
    // });

    const data = await TeacherService.findByNameAndAge(name, parseInt(age));
    return sails.helpers.customresponse.with({
      res,
      data,
      message: 'Found teacher(s)',
      statusCode: 200
    });
  } catch (err) {
    console.error('Error:', err);
    return sails.helpers.customresponse.with({
      res,
      data: null,
      message: err.message || 'Something went wrong',
      statusCode: 500
    });
  }
}

};

