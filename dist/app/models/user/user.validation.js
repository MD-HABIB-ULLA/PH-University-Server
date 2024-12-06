"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
// Zod validation schema for the User model
exports.userValidationSchema = zod_1.z.object({
    id: zod_1.z.string().trim().min(1, "ID is required"), // Required and trimmed
    password: zod_1.z.string().trim().min(6, "Password must be at least 6 characters"), // At least 6 chars
    needsPasswordChange: zod_1.z.boolean().default(false), // Boolean field with default value
    role: zod_1.z.enum(["admin", "student", "faculty"], {
        required_error: "Role is required",
    }), // Enum validation for role
    status: zod_1.z
        .enum(["in-progress", "blocked"], {
        required_error: "Status is required",
    })
        .default("in-progress"), // Enum validation for status with default value
    isDeleted: zod_1.z.boolean().default(false), // Boolean field with default value
});
