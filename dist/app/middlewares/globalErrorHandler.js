"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    console.log(err);
    // Log error details in production environment
    const statusCode = 500;
    const message = err.message || 'Something went wrong!';
    res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
    return;
};
exports.default = globalErrorHandler;
