import createDB from './db';

const userDB = createDB('users');

export const getAllUsers = async () => {
  try {
    const allDocs = await userDB.allDocs();
    return allDocs.rows;
  } catch (err) {
    const msg = `Faill, ${err}`;
    console.warn(msg);
    return msg;
  }
}

export const insertUsers = async (users) => {
  try {
    const result = await userDB.post(users);
    return result;
  } catch (err) {
    const msg = `Faill, ${err}`;
    console.warn(msg);
    return msg;
  }
}
