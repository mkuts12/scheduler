import _ from 'lodash';

export function generateTupleIn ( { start, end } ) {
    let a = _.random(start, end);
    let b = _.random(start, end);
    return {
        start: _.max([ a,b ]),
        end: _.min([ a,b ]),
    };
}

export function candidates ({ from, excluding }){
    let ids = _.map(excluding, obj => {
        return obj.id;
    });
    return _.remove(from, obj => {
        return _.findIndex( ids, id => {
            return obj.id === id;
        });
    });
}

export function mutation (shift, people){
    let { start, end } = generateTupleIn(0, shift.people.length);
    let arr = _.take(shift.people, start);
    arr = _.concat( arr, _.drop( shift.people, end ) )
    return _.concat( arr, _.sampleSize( candidates({
        from: people,
        excluding: arr,
    }), start - end ));
};

export function defined( a ){
    return ! a === undefined;
}

export function exists ( people, id ){
    return _.reduce(people, (res, person) => {
        return person.id === id ? 1 : res;
    }, 0);
}
