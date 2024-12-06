import { z } from "zod";

// Zod validation schema for the User model
export const userValidationSchema = z.object({
  id: z.string().trim().min(1, "ID is required"), // Required and trimmed
  password: z.string().trim().min(6, "Password must be at least 6 characters"), // At least 6 chars
  needsPasswordChange: z.boolean().default(false), // Boolean field with default value
  role: z.enum(["admin", "student", "faculty"], {
    required_error: "Role is required",
  }), // Enum validation for role
  status: z
    .enum(["in-progress", "blocked"], {
      required_error: "Status is required",
    })
    .default("in-progress"), // Enum validation for status with default value
  isDeleted: z.boolean().default(false), // Boolean field with default value
});

// Infer the Zod schema as a TypeScript type (optional)
export type UserValidationSchema = z.infer<typeof userValidationSchema>;
