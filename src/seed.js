import _ from 'lodash';
import { people, shifts } from './dataStore.js';
import newShift from './shift.js';

defaultPeople = people();
defaultShifts = shifts();

// { Array, Array } -> Array
export default function seed ({
    people : defaultPeople,
    shifts : defaultShifts,
}, callback){
    // New array of shifts
    let arr = _.fill( new Array(shifts.length), '' ).map( ( shift, index ) => {
        return newShift( shifts[index], people );
    } );
    callback(arr);
}
