export const catchError = (callback) => {
    return (req, res, next) => {
        callback(req, res, next).catch((error) => { next(error) });
    }
}

export class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}