export const USER_SCHEMA = 'User';

const UserSchema = {
  name: USER_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    age: 'date'
  }
};

export default UserSchema;