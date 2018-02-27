import configRepository from './configRepository';
import { USER_SCHEMA } from './userSchema';

const userRepository = configRepository(USER_SCHEMA);


export default userRepository;
