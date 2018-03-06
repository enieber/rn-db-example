import SQLite from 'react-native-sqlite-storage';


const setup = (dbName, versionName, openCB, errorCB) => {
  const db = SQLite.openDatabase(`${dbName}.db`, versionName, "Test Database", 200000, openCB, errorCB);
  return db;
}

export default setup;
