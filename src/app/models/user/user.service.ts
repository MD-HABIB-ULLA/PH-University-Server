import config from "../../config";
import { TStudent } from "../student/student.interface";
import StudentValidationSchema from "../student/student.validation";
import { TUser } from "./user.interface";
import User from "./user.model";
import Student from "../student/student.model"; // Assuming you have the Student model
import { userValidationSchema } from "./user.validation";

const createStudentInDB = async (
  password: string,
  studentData: TStudent

) => {
  try {
    const userData: Partial<TUser> = {};

    // Set the password (use the default password if not provided)
    userData.password = password || config.default_password;

    // Set the role as 'student'
    userData.role = "student";

    // Generate a unique ID for the user
    userData.id = Date.now().toString();

    // Validate the user data before saving
    const validateUserData = userValidationSchema.parse(userData);

    // Create the user in the database
    const createUser = await User.create(validateUserData);

    // Now assign the created user ID to the student
    studentData.id = createUser.id;
    studentData.user = createUser._id;

    console.log("Student Data before validation:", studentData);

    // Validate the student data using the StudentValidationSchema
    const validateStudentData = StudentValidationSchema.parse(studentData);

    // Create the student in the database
    const createStudent = await Student.create(validateStudentData); // Use the Student model here

    console.log("User Created:", createUser);
    console.log("Student Created:", createStudent);

    // Return the created student
    return createStudent;
  } catch (err) {
    // Pass the error to the next middleware (error handler)
    return err;
  }
};

export const userServices = {
  createStudentInDB,
};
