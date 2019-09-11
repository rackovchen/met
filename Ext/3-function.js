
const average = (a, b) => { return (a + b )/2;}
//console.log(average(5,11));

//


const square = x =>  x **= 2;
//console.log(square(4));

//

const cube = x =>  x **= 3;
//console.log(cube(2));

//

const total = ( ) => {
    for (i = 0; i <=2; i++){
        console.log(average(square(i), cube(i)));
    }
}
total();



