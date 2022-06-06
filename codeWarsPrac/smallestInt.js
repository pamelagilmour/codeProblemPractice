const arg1 = [34, 15, 88, 2];
const arg2 = [34, -345, -1, 100];

// https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621

class SmallestIntegerFinder {
	findSmallestInt(args) {
		// Us a for loop to compare values in an array
		let minNum = args[0];
		for (let i = 1; i < args.length; i++) {
			let aVal = args[i];
			// use a ternary to compare
			minNum = aVal < minNum ? aVal : minNum;
		}
		return minNum;
	}
}

const minny = new SmallestIntegerFinder;
console.log(minny.findSmallestInt(arg1));
console.log(minny.findSmallestInt(arg2));



// My favorite alternative solutions:

// class SmallestIntegerFinder {
// 	findSmallestInt(args) {
// 		args.sort(function (a, b) {
// 			return a - b;
// 		});
// 		return args[0];
// 	}
// }