import _ from 'lodash';
import uuid from 'uuid';
import { people as defaultPeople } from './dataStore';

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
        debugger;
        this.exceptions = exceptions
        this.id = uuid.v4();
        this.people = people ? people : _.sampleSize(defaultPeople, peopleNeeded);
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.exceptions = exceptions;
    }
}
