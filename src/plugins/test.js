// import _ from 'lodash';
var _ = require('lodash');
var exists = require('../utility.js').exists;

// export default function ( solution ) {
module.exports = function ( solution ){
    var sum = 0;
    sum += exists(solution[0].people, 1) ? 1 : 0;
    sum += exists(solution[0].people, 3) ? 1 : 0;
    sum += exists(solution[0].people, 1) ? 1 : 0;
    sum += exists(solution[1].people, 1) ? 1 : 0;
    sum += exists(solution[1].people, 2) ? 1 : 0;
    sum += exists(solution[1].people, 3) ? 1 : 0;
    sum += exists(solution[1].people, 4) ? 1 : 0;
    sum += exists(solution[1].people, 5) ? 1 : 0;
    sum += exists(solution[2].people, 4) ? 1 : 0;
    sum += exists(solution[2].people, 5) ? 1 : 0;
    sum += exists(solution[3].people, 3) ? 1 : 0;
}
