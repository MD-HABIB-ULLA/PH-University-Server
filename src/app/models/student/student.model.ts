import mongoose, { Schema } from 'mongoose';
import { TStudent } from './student.interface';

// TUserName Schema
const UserNameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false }, // Optional
  lastName: { type: String, required: true },
});

// TGuardian Schema
const GuardianSchema = new Schema({
  name: { type: UserNameSchema, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

// TStudent Schema
const StudentSchema = new Schema({
  id: { type: String, require: true }, // Optional if not set by the database
  user: { 
    type: Schema.Types.ObjectId, 
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
  isDeleted: { type: Boolean, required: true, default: false},
}, { timestamps: true }); // Auto add `createdAt` and `updatedAt`

// Define the model interface


// Create and export the model
const Student = mongoose.model<TStudent>('Student', StudentSchema);
export default Student;
