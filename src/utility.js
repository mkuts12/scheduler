import _ from 'lodash';

export function generateTupleIn ( { start, end } ) {
    let a = _.random(start, end);
    let b = _.random(start, end);
    return {
        start: _.min([ a,b ]),
        end: _.max([ a,b ]),
    };
}

export function candidates ({ from, excluding }){
    let ids = _.map(excluding, obj => {
        return obj.id;
    });
    let temp = _.filter(from, obj => {
        return _.findIndex( ids, id => {
            return obj.id === id ;
        }) === -1 ? true : false;
    });
    return temp;
}

export function mutation (shift, people){
    let { start, end } = generateTupleIn(0, shift.people.length);
    let arr = _.take(shift.people, start);
    arr = _.concat( arr, _.drop( shift.people, end ) )
    let candidateArr = candidates({
        from: people,
        excluding: arr,
    });
    let temp = _.sampleSize( candidateArr, end - start );
    arr = _.concat( arr, temp );
    // console.log('arr: ' + JSON.stringify(arr));
    return arr;
};

export function defined( a ){
    return ! a === undefined;
}

export function exists ( people, id ){
    return _.reduce(people, (res, person) => {
        return person.id === id ? 1 : res;
    }, 0);
}
