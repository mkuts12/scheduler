import _ from 'lodash';

export function newShift ({
    peopleNeeded,
    exceptions,
    type,
    startDate,
    endDate,
    people,
}) {
    return new Shift({
        peopleNeeded,
        exceptions,
        type,
        startDate,
        endDate,
        people,
    });
}
module.exports.copyShift = newShift;

class Shift {
    constructor({
        peopleNeeded,
        exceptions,
        type,
        startDate,
        endDate,
        people,
    } ){
        this.exceptions = exceptions
        this.id = uuid();
        this.people = people ? people : _.sampleSize(people, peopleNeeded);
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.exceptions = exceptions;
    }
}
