import _ from 'lodash';
import { people } from './dataStore.js';
import { generateTupleIn, mutation } from './utility.js'

export default function mutate ( solution, callback ){
    callback(_.map( solution, shift => {
        return mutation( shift, people );
    }));
}
