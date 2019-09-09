for ( var  i = 14; i < 31; i++) { 
    if ( i % 2 == 0 ) {
       i++;
    }
    console.log(i);
}



function range (start , end) {      
    for (var i = start; i < end; i++) {
        if (i % 2 == 0) {
            i++;
        }
        console.log(i);
    }
}
range(15, 30);