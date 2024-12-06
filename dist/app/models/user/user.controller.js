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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const createStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, student: studentData } = req.body;
        if (!studentData) {
            res.status(400).json({
                success: false,
                message: "Student data is required",
            });
            return;
        }
        // Call the service to create a student
        const createUser = yield user_service_1.userServices.createStudentInDB(password, studentData);
        res.status(201).json({
            success: true,
            message: "Student and user created successfully",
            data: createUser,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.userControllers = {
    createStudent,
};
