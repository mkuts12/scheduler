import _ from 'lodash';
import { generateTupleIn, mutation } from './utility.js';
import { copyShift } from './shift.js';

function pickParentsRandomly ( solution1, solution2 ){
    return _.random() ? {
        mother: solution1,
        father: solution2,
    } : {
        mother: solution2,
        father: solution1,
    };
}

export default function crossover (solution1, solution2, callback){
    let { mother, father } = pickParentsRandomly(solution1, solution2)
    console.log('mother: ' + JSON.stringify(mother));
    debugger;
    let temp = _.map( mother, ( shift, index ) => {
        return copyShift(shift, mutation(shift, father[index].people));
    });
    callback(temp);
}
