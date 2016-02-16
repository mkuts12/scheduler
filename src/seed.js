
export default function({
    peopleAmount,
    shiftOptions,
}){
    let arr = new Array(shiftOptions.length);
    arr.map( ( shift, index ) => {
        let shift = new Shift( shiftOptions[index] );
        shift.people.map(person => {
            person = new Person( Math.floor(  Math.random() * peopleAmount ) );
        })
    })
}
