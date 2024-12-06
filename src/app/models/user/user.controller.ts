/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response,   next: NextFunction) => {
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
    const createUser = await userServices.createStudentInDB(
      password,
      studentData,

    );


    res.status(201).json({
      success: true,
      message: "Student and user created successfully",
      data: createUser,
    });
  } catch (err: any) {

    next(err);
    
  }
};

export const userControllers = {
  createStudent,
};
