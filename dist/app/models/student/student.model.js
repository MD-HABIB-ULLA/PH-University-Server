"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// TUserName Schema
const UserNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false }, // Optional
    lastName: { type: String, required: true },
});
// TGuardian Schema
const GuardianSchema = new mongoose_1.Schema({
    name: { type: UserNameSchema, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
});
// TStudent Schema
const StudentSchema = new mongoose_1.Schema({
    id: { type: String, require: true }, // Optional if not set by the database
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Ensure every student references a user
    },
    name: { type: UserNameSchema, required: true },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String, required: true },
    profileImage: { type: String }, // Optional
    emergencyContactNo: { type: String, required: true },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'other'],
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: false
    },
    dateOfBirth: { type: String }, // Format: "YYYY-MM-DD"
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        mother: { type: GuardianSchema, required: true },
        father: { type: GuardianSchema, required: true },
    },
    localGuardian: { type: GuardianSchema, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
}, { timestamps: true }); // Auto add `createdAt` and `updatedAt`
// Define the model interface
// Create and export the model
const Student = mongoose_1.default.model('Student', StudentSchema);
exports.default = Student;
