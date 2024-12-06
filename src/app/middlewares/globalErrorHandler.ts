/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {   NextFunction, Response } from 'express';

const globalErrorHandler = (

  err: any,
  req: Request,
  res: Response,
  next: NextFunction,

) => {
    console.log(err);

  // Log error details in production environment
  const statusCode = 500;
  const message = err.message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
  return 
};

export default globalErrorHandler;