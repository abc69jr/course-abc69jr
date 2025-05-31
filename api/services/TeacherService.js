const { find } = require("../controllers/TeacherController");

module.exports = {
    create: async function (teacherData) {

        const newTeacher = await Teacher.create(teacherData).fetch();
        return newTeacher;
        
    },

    findAll: async () => {
            const teachers = await Teacher.find();

            //specific fields
            // const teachers = await Teacher.find().select(['name', 'email']);
            
            return teachers;

    },

    findById: async function (id) {
            const teacher = await Teacher.findOne({ id });
            if (!teacher) {
                throw new Error('Teacher not found');
            }
            return teacher;
        
    },

    update: async function (id, teacherData) {

            const updatedTeacher = await Teacher.updateOne({ id }).set(teacherData);
            if (!updatedTeacher) {
                throw new Error('Teacher not found');
            }
            return updatedTeacher;
        
    },

    delete: async function (id) {
        try {
            // Xóa giáo viên theo ID
            const deletedTeacher = await Teacher.destroyOne({ id });
            if (!deletedTeacher) {
                throw new Error('Teacher not found');
            }
            return deletedTeacher;
        } catch (error) {
            throw new Error('Error deleting teacher: ' + error.message);
        }
    }
}