const Realm = require('realm');

const createDB = (scheema) => {
  return Realm({schema: [...scheema]});
}

export default createDB;
