import dbConfigure from './configure';

const createUser =  'User(user_id INTEGER PRIMARY KEY NOT NULL, name TEXT)';

export const connection = dbConfigure('pouchdb', '1.0', (cb) => {
  console.log(cb);
}, (err) => {
  console.warn(err);
});

export const setup = () => {
  connection.transaction((txn) => {
    txn.executeSql(`CREATE TABLE IF NOT EXISTS ${createUser}`, []);
  });
};
