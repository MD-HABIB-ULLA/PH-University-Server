import { Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName?: string; // Optional for students with middle names
  lastName: string;
};

export type TGuardian = {
  name: TUserName;
  occupation: string;
  contactNo: string;
};
export type TStudent = {
  id?: string;
  user: Types.ObjectId;
  status:string;
  name: TUserName;
  password?: string;
  email: string;
  phoneNo: string;
  profileImage?: string;
  emergencyContactNo: string;
  gender: 'Male' | 'Female' | 'other';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  dateOfBirth?: string; // Format: "YYYY-MM-DD"
  presentAddress: string;
  permanentAddress: string;
  guardian: {
    mother: TGuardian;
    father: TGuardian;
  };
  localGuardian: TGuardian;
  isDeleted: boolean;
};


