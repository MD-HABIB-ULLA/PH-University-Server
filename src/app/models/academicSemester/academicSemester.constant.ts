import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcademicSemesterNameCodeMapper,
  TMonths,
} from "./academicSemester.interface";

export const Month: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Summer",
  "Fall",
];

export const AcademicSemesterCode: TAcademicSemesterCode[] = ["1", "2", "3"];

export const AcademicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: "1",
  Summer: "2",
  Fall: "3",
};
