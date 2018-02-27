import SQLite from 'react-native-sqlite-2';

export default (dbName, versionName) => SQLite.openDatabase(`${dbName}.db`, versionName, '', 1);
