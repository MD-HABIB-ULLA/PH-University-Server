"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Zod Schema for TUserName
const UserNameSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .trim()
        .min(1, "First name is required.")
        .max(20, "First name must not exceed 20 characters"),
    middleName: zod_1.z.string().trim().optional(),
    lastName: zod_1.z
        .string()
        .trim()
        .min(1, "Last name is required")
        .max(20, "Last name must not exceed 20 characters"),
});
// Zod Schema for TGuardian
const GuardianSchema = zod_1.z.object({
    name: UserNameSchema,
    occupation: zod_1.z.string().trim().min(1, "Occupation is required."),
    contactNo: zod_1.z.string().trim().min(1, "Contact number is required"),
});
// Zod Schema for TStudent
const StudentValidationSchema = zod_1.z.object({
    id: zod_1.z.string().trim(), // Optional if not set by the database
    user: zod_1.z.any(), // Optional
    name: UserNameSchema,
    email: zod_1.z.string().trim().email("Invalid email address"),
    phoneNo: zod_1.z.string().trim().min(1, "Phone number is required"),
    profileImage: zod_1.z.string().trim().optional(), // Optional
    emergencyContactNo: zod_1.z
        .string()
        .trim()
        .min(1, "Emergency contact number is required"),
    gender: zod_1.z.enum(["Male", "Female", "other"], {
        required_error: "Gender is required",
    }),
    bloodGroup: zod_1.z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(), // Optional field
    dateOfBirth: zod_1.z
        .string()
        .trim()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in the format YYYY-MM-DD")
        .optional(), // Optional
    presentAddress: zod_1.z.string().trim().min(1, "Present address is required"),
    permanentAddress: zod_1.z.string().trim().min(1, "Permanent address is required"),
    guardian: zod_1.z.object({
        mother: GuardianSchema,
        father: GuardianSchema,
    }),
    localGuardian: GuardianSchema,
    isActive: zod_1.z.boolean().optional(), // Optional
});
// Export the schema for validation use
exports.default = StudentValidationSchema;
