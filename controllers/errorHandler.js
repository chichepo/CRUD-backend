// errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the stack trace for debugging

    const statusCode = err.statusCode || 500;
    const defaultMessages = {
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed',
        406: 'Not Acceptable',
        408: 'Request Timeout',
        409: 'Conflict',
        422: 'Unprocessable Entity',
        429: 'Too Many Requests',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        504: 'Gateway Timeout',
    };

    // Use the default message for the status code if no custom message is provided
    const message = err.message || defaultMessages[statusCode] || 'An error occurred';

    // Send the error response
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

module.exports = errorHandler;
