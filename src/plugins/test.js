import _ from 'lodash';

export default function ( solution ) {
    let sum = 0;
    sum += +( solution[0].people[ "1" ] );
    sum += +( solution[0].people[ "3" ] );
    sum += +( solution[0].people[ "5" ] );
    sum += +( solution[1].people[ "1" ] );
    sum += +( solution[1].people[ "2" ] );
    sum += +( solution[1].people[ "3" ] );
    sum += +( solution[1].people[ "4" ] );
    sum += +( solution[1].people[ "5" ] );
    sum += +( solution[2].people[ "4" ] );
    sum += +( solution[2].people[ "5" ] );
    sum += +( solution[3].people[ "3" ] );
}
