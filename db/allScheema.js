import Realm from 'realm';

import databaseOptions from './databaseOptions';
import UserSchema from './userSchema';

export const options = databaseOptions([UserSchema], 2);

export default new Realm(options);
