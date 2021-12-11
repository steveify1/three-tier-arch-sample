const { AppError } = require("./AppError");

class BadRequestError extends AppError {
    constructor(message) {
        super(400, message || 'Bad Request');
    }
}

exports.BadRequestError = BadRequestError;