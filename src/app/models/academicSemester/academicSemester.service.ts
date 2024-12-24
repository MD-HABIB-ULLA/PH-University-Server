import { AcademicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (AcademicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid academic semester name or code");
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>
) => {
  if (
    payload.name &&
    payload.year &&
    AcademicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid academic semester name or code");
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
  getSingleAcademicSemesterFromDB,
  getAllAcademicSemesterFromDB,
};
