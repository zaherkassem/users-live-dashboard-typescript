import HttpStatus from 'http-status-codes';

/**
 * NOT_FOUND(404) middleware to catch error response
 *
 * @param  {Object}   req:any
 * @param  {Object}   res:any
 * @param  {Function} next:any
 */
export function notFound(req:any, res:any, next:any) {
    res.status(HttpStatus.NOT_FOUND)
        .json({
            error: {
                code: HttpStatus.NOT_FOUND,
                message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
            }
        });
}

/**
 * METHOD_NOT_ALLOWED(405) middleware to catch error response.
 * It should be placed at the very bottom of the middleware stack.
 *
 * @param {Object} req:any
 * @param {Object} res:any
 */
export function methodNotAllowed(req:any, res:any) {
    res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
        error: {
            code: HttpStatus.METHOD_NOT_ALLOWED,
            message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED)
        }
    });
}

/**
 * Generic error response middleware
 *
 * @param  {Object}   err:any
 * @param  {Object}   req:any
 * @param  {Object}   res:any
 * @param  {Function} next:any
 */
export function genericErrorHandler(err:any, req:any, res:any, next:any) {
    console.error(err);
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            error: {
                code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
                message: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
            }
        });
}