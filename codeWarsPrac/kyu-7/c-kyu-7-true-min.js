// The Math.min function has stopped working, so we have to use our own function. 
// We are off to a good start, but this function doesn't seem to handle everything properly. 

// Add in the proper checks to 
// return NaN for anything that isn't an actual number, 
// except treat null like 0.

// https://github.com/Automedon/CodeWars-7-kyu-Soluitions/blob/master/True%20Min


// Solutions: https://www.codewars.com/kata/52378b3ee72f21e1ea000045/solutions/javascript

// function min(a, b) {

// 	if (a === null && (a = 0)) {
// 		return true;
// 	}
// 	if (b === null && (b = 0)) {
// 		return true;
// 	}
// 	if (isNaN(a) || isNaN(b)) {
// 		return NaN;
// 	}
// 	return a < b ? a : b;
// }

// function min(a, b) {
// 	a = a === null ? (a = 0) : a;
// 	b = b === null ? (b = 0) : b;

// 	return isNaN(a) || isNaN(b) ? NaN : a < b ? a : b;
// }

function min(a, b) {
	if (typeof a === 'undefined' || typeof b === 'undefined') {
		return NaN;
	}
	if (a === null) {
		a = 0;
	}
	if (b === null) {
		b = 0;
	}
	if (isNaN(a) || isNaN(b)) {
		return NaN;
	}
	return a < b ? a : b;
}

// // function min(a, b){
//   if(a === null){
//     a = 0;
//   }
//   if(b === null){
//     b = 0;
//   }
  
//   if(typeof a === "number" && typeof b === "number"){
//     if(!isNaN(a) && !isNaN(b)){
//       return (a < b) ? a : b
//     }
//   }
  
//   return NaN;
// }

// console.log(min(1, -2.5));  // === -2.5, 'Return the minimum of the two arguments'
// console.log(min(-1.5, NaN));
console.log(isNaN(min(-1.5, NaN)));//'Any NaN value should return NaN'
// console.log(min(1.5, undefined));
console.log(isNaN(min(1.5, undefined)));  //, 'Any undefined value should return NaN'
// console.log(min(-Infinity, Infinity));  //=== -Infinity, 'Infinity should be handled like normal numbers'
// console.log(min(null, 2.5));  //=== 0, 'treat null as if it were 0'
