import { Router } from "express";
import { AcademicSemestersRoutes } from "../models/academicSemester/academicSemester.router";
const router = Router();
const moduleRoute = [
  { path: "/academic-semesters", route: AcademicSemestersRoutes },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;