import _ from 'lodash';
import { people, shifts } from './dataStore.js';
import { newShift } from './shift.js';
import { defined } from './utility.js';

let defaultPeople = people;
let defaultShifts = shifts;

// { Array, Array } -> Array
export default function seed (callback, {
    allPeople,
    allShifts,
} = {}){
    let people = defined(allPeople) ? allPeople : defaultPeople;
    let shifts = defined(allShifts) ? allShifts : defaultShifts;
    // New array of shifts
    callback(_.fill( new Array(shifts.length), '' ).map( ( shift, index ) => {
        return newShift( shifts[index], people );
    } ));
}

