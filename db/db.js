import dbConfigure from './configure';

const createUser =  'User(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(600))';

export const connection = dbConfigure('pouchdb', '1.0');

export const setup = () => {
  connection.transaction((txn) => {
    txn.executeSql(`CREATE TABLE IF NOT EXISTS ${createUser}`, []);
  });
};
