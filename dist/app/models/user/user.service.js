"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const config_1 = __importDefault(require("../../config"));
const student_validation_1 = __importDefault(require("../student/student.validation"));
const user_model_1 = __importDefault(require("./user.model"));
const student_model_1 = __importDefault(require("../student/student.model")); // Assuming you have the Student model
const user_validation_1 = require("./user.validation");
const createStudentInDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = {};
        // Set the password (use the default password if not provided)
        userData.password = password || config_1.default.default_password;
        // Set the role as 'student'
        userData.role = "student";
        // Generate a unique ID for the user
        userData.id = Date.now().toString();
        // Validate the user data before saving
        const validateUserData = user_validation_1.userValidationSchema.parse(userData);
        // Create the user in the database
        const createUser = yield user_model_1.default.create(validateUserData);
        // Now assign the created user ID to the student
        studentData.id = createUser.id;
        studentData.user = createUser._id;
        console.log("Student Data before validation:", studentData);
        // Validate the student data using the StudentValidationSchema
        const validateStudentData = student_validation_1.default.parse(studentData);
        // Create the student in the database
        const createStudent = yield student_model_1.default.create(validateStudentData); // Use the Student model here
        console.log("User Created:", createUser);
        console.log("Student Created:", createStudent);
        // Return the created student
        return createStudent;
    }
    catch (err) {
        // Pass the error to the next middleware (error handler)
        return err;
    }
});
exports.userServices = {
    createStudentInDB,
};
