import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/IUser';
import User from '../models/user.model';

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */

export default (req:any, res:any, next:any) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, process.env?.TOKEN_SECRET_KEY || 'eyJhbGciOiJIUzI1NiJ9', (err:any, decoded:any) => {
            if (err) {
                res.status(HttpStatus.UNAUTHORIZED).json({error: 'You are not authorized to perform this operation!'});
            } else {
                User.query().findOne({ id: decoded.id }).select('email', 'id')
               .then( (user: IUser | any) => {
                    if (!user) {
                        res.status(HttpStatus.NOT_FOUND).json({error: 'No such user'});
                    } else {
                        req.currentUser = user;
                        next();
                    }

                });
            }
        });
    } else {
        res.status(HttpStatus.FORBIDDEN).json({
            error: 'No token provided'
        });
    }
};