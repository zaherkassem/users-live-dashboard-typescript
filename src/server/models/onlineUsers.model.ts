import objectionModel from '../config/objection';
import {IOnlineUser} from '../types/IOnlineUser'
const TABLE_NAME = 'online_users';

/**
 * OnlineUsers model.
 */
class OnlineUsers extends objectionModel implements IOnlineUser {

  id: number;
  user_id: number;
  user_ip: string;
  user_agent: string;
  created_at: Date;
  updated_at: Date;

  /**
   * Get table name.
   */
  static get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default OnlineUsers;