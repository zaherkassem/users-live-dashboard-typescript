import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
import {IUser} from '../types/IUser'
import knex from '../config/knex';
import { Request, Response } from 'express';

/**
 * Find all the users
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req: Request, res: Response) {
  knex('users as u')
    .select(
      'u.id',
      'u.email',
      'ou.user_ip',
      knex.raw('TIME(ou.created_at) AS login_time'),
      knex.raw('TIME(ou.updated_at) AS last_update_time'),
      knex.raw('DATE(ou.created_at) AS last_login')
    )
    .join('online_users as ou', function () {
      this.on('u.id', '=', 'ou.user_id').andOn(function () {
        this.on(
          'ou.created_at',
          '=',
          knex.raw('(SELECT MAX(created_at) FROM online_users WHERE user_id = u.id)')
        );
      });
    })
    .where('u.isOnline', true)
    .orderBy('ou.created_at', 'desc')
    .then((users) => {
      res.json({
        error: false,
        data: users,
      });
    })
    .catch((err:any) => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      });
    });
}

/**
 *  Find user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req: Request, res: Response) {
  User.query()
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: true,
          data: {},
        });
      } else {
        res.json({
          error: false,
          data: user,
        });
      }
    })
    .catch((err: any) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

/**
 * Store new user
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req: Request, res: Response) {
  const { first_name, last_name, email } = req.body;
  const password = bcrypt.hashSync(req.body.password, 10);
  const isOnline = false;

  User.query()
    .insert({
      first_name,
      last_name,
      email,
      password,
      isOnline,
    })
    .then((user: IUser) =>
      res.json({
        success: true,
        data: user,
      })
    )
    .catch((err: any) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

/**
 * Update user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req: Request, res: Response) {
  const { first_name, last_name, email, isOnline } = req.body as any;

  User.query()
    .patchAndFetchById(req.params.id, {
      first_name,
      last_name,
      email,
      isOnline,
    })
    .then((user: IUser) =>
      res.json({
        error: false,
        data: user,
      })
    )
    .catch((err: any) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: true,
        data: { message: err.message },
      })
    );
}

/**
 * Destroy user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req: Request, res: Response) {
  const userId = req.params.id;

  User.query()
    .deleteById(userId)
    .then(() =>
      res.json({
        error: false,
        data: { message: 'User deleted successfully.' },
      })
    )
    .catch((err: any) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: true,
        data: { message: err.message },
      })
    );
}
