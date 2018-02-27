import { connection } from './db';

const repository = (nameTable) => {

  const get = where => new Promise(async (fulfill, reject) => {
    try {
      let items = [];
      connection.transaction((txn) => {
        txn.executeSql(`SELECT * FROM ${nameTable} WHERE ${where}`, [], (tx, res) => {
          items = res.rows;
        });
      });
      console.log(items);
      fulfill(items);
    } catch (err) {
      const msg = `Faill, ${err}`;
      console.warn(msg);
      reject(msg);
    }
  });

  const insert = (params, values) => new Promise(async (fulfill, reject) => {
    try {
      let result = {};
      connection.transaction((txn) => {
        const sql = `INSERT INTO ${nameTable} ${params}`;
        txn.executeSql(sql, values, (tx, res) => {
          debugger
          console.log(tx, res);
          fulfill(result);
        },
      (err) => {
        console.warn(err);
      });
      }, (e) => {
        console.log(e);
      });
    } catch (err) {
      const msg = `Faill Insert in ${nameTable}, ${err}`;
      console.warn(msg);
      reject(msg);
    }
  });

  const remove = where => new Promise(async (fulfill, reject) => {
    try {
      let result = {};
      connection.transaction((txn) => {
        txn.executeSql(`DELETE FROM ${nameTable} WHERE ${where}`, []);
      });
      fulfill(result);
    } catch (err) {
      const msg = `Faill delete value in ${nameTable}, ${err}`;
      console.warn(msg);
      reject(msg);
    }
  });

  const allDocs = () => new Promise(async (fulfill, reject) => {  
    try {
      let items = [];
      connection.transaction((txn) => {
        txn.executeSql(`SELECT * FROM ${nameTable}`, [], (tx, res) => {
          items = res.rows;
        });
      });
      console.log(items);
      fulfill(items);
    } catch (err) {
      const msg = `Faill, ${err}`;
      console.warn(msg);
      reject(msg);
    }
  });

  const update = (params, values) => new Promise(async (fulfill, reject) => {
    try {
      let result = {};
      const isOkDelete = await connection.transaction((txn) => {
        txn.executeSql(`DELETE FROM ${nameTable}`, []);
      });
      if (isOkDelete) {
        const insertOk = await insert(params, values);
        console.log(insertOk);
      }
      fulfill(result);
    } catch (err) {
      const msg = `Faill, ${err}`;
      console.warn(msg);
      reject(msg);
    }
  });

  return {
    remove,
    update,
    insert,
    get,
    allDocs,
  };
};

export default repository;
