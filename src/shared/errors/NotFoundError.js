const { AppError } = require("./AppError");

class NotFoundError extends AppError {
    constructor(message) {
        super(404, message || 'Not Found');
    }
}

exports.NotFoundError = NotFoundError;