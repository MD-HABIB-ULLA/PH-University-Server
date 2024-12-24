"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const academicSemester_routes_1 = require("../models/academicSemester/academicSemester.routes");
const router = (0, express_1.Router)();
const moduleRoute = [
    { path: "/academic-semesters", route: academicSemester_routes_1.AcademicSemestersRoutes },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
