import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import {IUser} from '../types/IUser'
import { Request, Response } from 'express';

/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req:any
 * @param {object} res:any
 * @returns {*}
 */
export function login(req: Request, res: Response) {
  const { email, password } = req.body as any;
  User.query().findOne({
     email 
  })
    
    .then((user:IUser | any ) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const username = user.first_name + ' ' + user.last_name;
          const token = jwt.sign(
            {
              id: user.id,
              email: email,
              userName: username,
            },
            process.env.TOKEN_SECRET_KEY || 'eyJhbGciOiJIUzI1NiJ9'
          );

          res.json({
            success: true,
            token,
            email: email,
            userName: username,
          });

          // isOnline;
        } else {
          console.log('error', 'Authentication failed. Invalid password.');

          res.status(HttpStatus.UNAUTHORIZED).json({
            success: false,
            message: 'Authentication failed. Invalid password.',
          });
        }
      } else {
        console.log('error', 'Invalid username or password.');

        res.status(HttpStatus.UNAUTHORIZED).json({
          success: false,
          message: 'Invalid username or password.',
        });
      }
    });
}
