import _ from 'lodash';

export function newShift ({
    peopleNeeded,
    ptorim,
    id,
}, people) {
    return people.size < peopleNeeded ? undefined : {
        ptorim,
        people: _.sampleSize(people, peopleNeeded),
        id: id,
    };
}

export function copyShift ({
    ptorim,
    id,
}, newPeople) {
    return {
        ptorim,
        id,
        people: newPeople,
    };
}
