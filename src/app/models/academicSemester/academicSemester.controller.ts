
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterService } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
    req.body
  );
 
  console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Academic semesters ia successfully created",
    data: result,
  });
});


export const AcademicSemestersControllers ={
    createAcademicSemester,
}
