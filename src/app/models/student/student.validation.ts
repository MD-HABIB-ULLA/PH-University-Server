import { z } from "zod";

// Zod Schema for TUserName
const UserNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(20, "First name must not exceed 20 characters"),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(20, "Last name must not exceed 20 characters"),
});

// Zod Schema for TGuardian
const GuardianSchema = z.object({
  name: UserNameSchema,
  occupation: z.string().trim().min(1, "Occupation is required."),
  contactNo: z.string().trim().min(1, "Contact number is required"),
});

// Zod Schema for TStudent
const StudentValidationSchema = z.object({
  id: z.string().trim(), // Optional if not set by the database
  user: z.any(), // Optional
  name: UserNameSchema,
  email: z.string().trim().email("Invalid email address"),
  phoneNo: z.string().trim().min(1, "Phone number is required"),
  profileImage: z.string().trim().optional(), // Optional
  emergencyContactNo: z
    .string()
    .trim()
    .min(1, "Emergency contact number is required"),
  gender: z.enum(["Male", "Female", "other"], {
    required_error: "Gender is required",
  }),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(), // Optional field
  dateOfBirth: z
    .string()
    .trim()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Date of birth must be in the format YYYY-MM-DD"
    )
    .optional(), // Optional
  presentAddress: z.string().trim().min(1, "Present address is required"),
  permanentAddress: z.string().trim().min(1, "Permanent address is required"),
  guardian: z.object({
    mother: GuardianSchema,
    father: GuardianSchema,
  }),
  localGuardian: GuardianSchema,
  isActive: z.boolean().optional(), // Optional
});

// Export the schema for validation use
export default StudentValidationSchema;
