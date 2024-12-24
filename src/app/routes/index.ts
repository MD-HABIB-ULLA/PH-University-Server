import { Router } from "express";
import { AcademicSemestersRoutes } from "../models/academicSemester/academicSemester.routes";
import { AcademicFacultyRoutes } from "../models/academicFaculty/academicFaculty.routes";
const router = Router();

const moduleRoute = [
  {
    path: "/academic-semesters",
    route: AcademicSemestersRoutes,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
