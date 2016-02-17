import _ from 'lodash';

export function newShift ({
    peopleNeeded,
    ptorim,
}, people) {
    return people.size > peopleNeeded ? undefined : {
        ptorim,
        people: _.sampleSize(people, peopleNeeded),
    };
}
