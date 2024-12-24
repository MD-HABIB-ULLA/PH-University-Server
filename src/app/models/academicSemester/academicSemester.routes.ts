import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";
import { AcademicSemestersControllers } from "./academicSemester.controller";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema
  ),
  AcademicSemestersControllers.createAcademicSemester
);

router.patch(
  "/:semesterId",
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema
  ),
  AcademicSemestersControllers.updateAcademicSemester
);

router.get(
  "/:semesterId",
  AcademicSemestersControllers.getSingleAcademicSemester
);

router.get("/", AcademicSemestersControllers.getAllAcademicSemesters  );

export const AcademicSemestersRoutes = router;
