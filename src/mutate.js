import _ from 'lodash';
import { people } from './dataStore.js';
import { generateTupleIn, mutation } from './utility.js'
import { copyShift } from './shift.js';

export default function mutate ( solution, callback ){
    callback(_.map( solution, shift => {
        return copyShift( shift, mutation( shift, people ) );
    }));
}
