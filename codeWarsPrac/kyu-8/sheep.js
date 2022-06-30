
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

// function countSheeps(arrayOfSheep) {
// 	// TODO May the force be with you
// 	let count = 0;
// 	for (let i = 0; i < arrayOfSheep.length; i++) {
		
// 		if (arrayOfSheep[i] === true) {
// 			count++;
// 		}
// 	}

// 	return count;
// }

function countSheeps(arrayOfSheeps) {
	console.log(arrayOfSheeps.filter(Boolean).length);
}

countSheeps(array1);
