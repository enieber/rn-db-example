import PouchDB from 'pouchdb-react-native';

const createDB = (name) => {
  return new PouchDB(name);
}

export default createDB;
