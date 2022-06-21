// The Math.min function has stopped working, so we have to use our own function. 
// We are off to a good start, but this function doesn't seem to handle everything properly. 

// Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

 // if ((typeof a) === Number) {
    //     a = NaN;
    // } else if (typeof a === null) {
    //     a = 0;

    // }
	// if (typeof b === Number) {
	// 	(b = NaN);
	// } else if (typeof b === null) {
	// 	(b = 0);
	// }  

function min(a, b) {
    if(a < b) {
        console.log(a);
    }

}


min(7, 9);
// console.log(min(null,9));
// console.log(min(NaN,9));