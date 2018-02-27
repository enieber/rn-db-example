const repository = (Realm, databaseOptions) => (SCHEMA) => {
  const queryAll = () => new Promise(async(resolve, reject) => {
    try {
      const realm = await Realm.open(databaseOptions);
      realm.write(() => {
        let allObject = realm.objects(SCHEMA);
        resolve(allObject);
      });
    } catch(err) {
      console.warn(`Faill get all ${SCHEMA}, ${err}`);
      reject(err);
    }
  });

  const insert = item => new Promise(async(resolve, reject) => {
    try {
      const realm = await Realm.open(databaseOptions);
      realm.write(() => {
        realm.create(SCHEMA, item);
        resolve(item);
      });
    } catch(err) {
      console.warn(`Faill insert ${SCHEMA}, ${err}`);
      reject(err);
    }
  });

  const update = item => new Promise(async(resolve, reject) => {
    try {
      const realm = await Realm.open(databaseOptions);
      realm.write(() => {
        let updatingteItem = realm.objectForPrimaryKey(SCHEMA, item.id);
        updatingteItem = {
          ...item,
        };
        resolve();
      });
    } catch(err) {
      console.warn(`Faill update ${SCHEMA}, ${err}`);
      reject(err);
    }
  });

  const remove = item => new Promise(async(resolve, reject) => {
    try {
      const realm = await Realm.open(databaseOptions);
      realm.write(() => {
        let deletingteItem = realm.objectForPrimaryKey(SCHEMA, item.id);
        deletingteItem = {
          ...item,
        };
        realm.delete(deletingteItem);
        resolve();
      });
    } catch(err) {
      console.warn(`Faill delete ${SCHEMA}, ${err}`);
      reject(err);
    }
  });

  const removeAll = () => new Promise(async(resolve, reject) => {
    try {
      const realm = await Realm.open(databaseOptions);
      realm.write(() => {
        let allObject = realm.objects(SCHEMA);
        realm.delete(allObject);
        resolve();
      });
    } catch(err) {
      console.warn(`Faill delete all ${SCHEMA}, ${err}`);
      reject(err);
    }
  });

  return {
    queryAll,
    insert,
    update,
    remove,
    removeAll,
  }
}

export default repository;
