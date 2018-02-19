import createDB from './db';
const Realm = require('realm');

const UserScheema = {
  name: 'User',
  properties: {
    name: 'string',
  }
}

let realm = new Realm({schema: [UserScheema]});

export const getAllUsers = async () => {
  try {
    const users = realm.objects('User');
    return users;
  } catch (err) {
    const msg = `Faill, ${err}`;
    console.warn(msg);
    return msg;
  }
}

export const insertUsers = async (users) => {
  try {
    const db = await realm;
    const name = UserScheema.name;
    console.log(users);
    return db.write(() => db.create(name, {...users}));
    // 
  } catch (err) {
    const msg = `Faill, ${err}`;
    console.warn(msg);
    return msg;
  }
}
