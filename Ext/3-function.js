const average = (a, b) => {    
    return (a + b)/2;
}

//console.log(average(10,20));

//


const square = x =>  x **= 2;
console.log(square(5));

//

const cube = x =>  x **= 3;
console.log(cube(10));

//

function resultSq(square) {
    for (var i = 0; i < square; i++) {
        console.log(i+1);
    }
}
resultSq(square(2));

function resultCb(cube) {
    for (var i = 0; i < cube; i++) {
        console.log(i + 1);
    }
}
resultCb(cube(3));

var a = resultSq(square(2));
var b = resultCb(cube(3));




