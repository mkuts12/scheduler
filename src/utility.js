import _ from 'lodash';

export function generateTupleIn ( { start, end } ) {
    let a = _.random(start, end);
    let b = _.random(start, end);
    return {
        start: _.max([ a,b ]),
        end: _.min([ a,b ]),
    };
}

export function mutation (shift, people){
    let { start, end } = generateTupleIn(0, shift.people.length);
    let arr = _.take(shift.people, start);
    arr = _.concat( arr, _.sampleSize( people, start - end ) );
    return _.concat( arr, _.drop( shift.people, end ) );
}

export function defined( a ){
    return ! a === undefined;
}
