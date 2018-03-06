import dbConfigure from './configure';

const createUser =  'User(user_id INTEGER PRIMARY KEY NOT NULL, name TEXT)';
const createProducs = 'Product(name TEXT, value REAL)'

const tables = [createUser, createProducs];

export const connection = dbConfigure('pouchdb', '1.0', (cb) => {
  console.log(cb);
}, (err) => {
  console.warn(err);
});

export const setup = () => {
  connection.transaction((txn) => {
    tables.map(table => {
      txn.executeSql(`CREATE TABLE IF NOT EXISTS ${table}`, []);
    })
    
  });
};
