import HttpStatus from 'http-status-codes';
import OnlineUsers from '../models/onlineUsers.model';
import {IOnlineUser} from '../types/IOnlineUser'
import knex from '../config/knex';
import { Request, Response } from 'express';

/**
 * Find all the online_users
 *
 * @param {object} req:any
 * @param {object} res:any
 * @returns {*}
 */
export function findAll(req: Request, res: Response) {
  OnlineUsers.query()
    .then((users:IOnlineUser[]) => {
      return res.json({error : false , data : users.map((user: any) => user.toJSON())}) ;
    })
    .catch((err:any) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR as any).json({
        error: err,
      })
    );
}

/**
 *  Find user by id
 *
 * @param {object} req:any
 * @param {object} res:any
 * @returns {*}
 */
export function findById(req: Request, res: Response) {
  const user_id = req.params.id;

  try {
    knex('online_users')
      .select('user_id', knex.raw('COUNT(*) AS logins_count'))
      .join('users', 'online_users.user_id', 'users.id')
      .select('users.created_at AS register_time', 'online_users.user_agent as user_agent')
      .where('online_users.user_id', user_id)
      .groupBy('user_id', 'users.created_at', 'online_users.user_agent')
      .then((result:any) => {
        return res.json({ data: result});
      })
      .catch((err) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          error: err,
        });
      });
  } catch (ex:any) {
    console.log({ ex });
  }
}

/**
 * Store new online_users
 * 
 * @param {object} req:any
 * @param {object} res:any
 * @returns {*}
 */
export function store(req: Request, res: Response) {
  const body  = req.body as any
  const { user_id, user_ip, user_agent } = body;
    OnlineUsers.query().insert({
      user_id, user_ip, user_agent
    })
     
      .then((user:any) =>
        res.json({
          success: true,
          data: user.toJSON(),
        })
      )
      .catch((err) =>
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          error: err,
        })
      );
}

/**
 * Update online_users by id
 *
 * @param {object} req:any
 * @param {object} res:any
 * @returns {*}
 */
export function update(req: Request, res: Response) {
  
}

/**
 * Destroy online_users by id
 *
 * @param {object} req:any
 * @param {object} res:any
 * @returns {*}
 */
export function destroy(req: Request, res: Response) {
  
}
