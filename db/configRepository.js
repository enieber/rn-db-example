import Realm from 'realm';

import repository from './repositoryDB';
import { options } from './allScheema';

export default repository(Realm, options);
