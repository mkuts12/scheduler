import _ from 'lodash';
import { people } from './dataStore.js';

function generateTupleIn ( { start, end } ) {
    let a = _.random(start, end);
    let b = _.random(start, end);
    return {
        start: _.max([ a,b ]),
        end: _.min([ a,b ]),
    };
}

function mutation (shift, people){
    let { start, end } = generateTupleIn(0, shift.people.length);
    let arr = _take(shift.people, start);
    arr = _reduce( _.sampleSize( people, start - end ), (newShift, person) => {
        return _.concat(newShift, person);
    }, arr);
    return _.concat( arr, _.drop( shift.people, end ) );
}

export default function mutate ( solution, callback ){
    callback(_.map( solution, shift => {
        shift = mutation( shift, people() );
    }));
}
