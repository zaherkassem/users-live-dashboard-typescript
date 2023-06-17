import HttpStatus from 'http-status-codes';

/**
 * Joi error handler middleware
 *
 * @param {object} err:any
 * @param {object} req:any
 * @param {object} res:any
 * @param {function} next:any
 *
 */
export default (err:any, req:any, res:any, next:any) => {
    if (err.isJoi) {
        const error = {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            details: err.details && err.details.map( (err:any) => {
                return {
                    message: err.message,
                    param: err.path
                };
            })
        };
        return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    // If this isn't a Joi error, send it to the next error handler
    return next(err);
};
