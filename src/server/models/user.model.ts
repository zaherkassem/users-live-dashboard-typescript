import objectionModel from '../config/objection';
import {IUser} from '../types/IUser'
const TABLE_NAME = 'users';


/**
 * User model.
 */
class User extends objectionModel implements IUser {
    id: number;
    first_name: string;
    last_name :string;
    email :string;
    password: string;
    isOnline : boolean;

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

    verifyPassword(password:string) {
        return this.password === password;
    }
} 

export default User;