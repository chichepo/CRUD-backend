// errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the stack trace

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    // Handle some specific HTTP errors
    switch (statusCode) {
        case 400:
            message = message || 'Bad Request';
            break;
        case 401:
            message = message || 'Unauthorized';
            break;
        case 403:
            message = message || 'Forbidden';
            break;
        case 404:
            message = message || 'Not Found';
            break;
        case 405:
            message = message || 'Method Not Allowed';
            break;
        case 406:
            message = message || 'Not Acceptable';
            break;
        case 408:
            message = message || 'Request Timeout';
            break;
        case 409:
            message = message || 'Conflict';
            break;
        case 422:
            message = message || 'Unprocessable Entity';
            break;
        case 429:
            message = message || 'Too Many Requests';
            break;
        case 500:
            message = message || 'Internal Server Error';
            break;
        case 502:
            message = message || 'Bad Gateway';
            break;
        case 503:
            message = message || 'Service Unavailable';
            break;
        case 504:
            message = message || 'Gateway Timeout';
            break;
    }

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};

module.exports = errorHandler;
