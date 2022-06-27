// Our football team finished the championship.
// The result of each match look like "x:y".
// Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//     if x > y: 3 points
//     if x < y: 0 point
//     if x = y: 1 point

// Notes:

//     there are 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function points(games) {
	let arr = [];
	for (let i = 0; i < games.length; i++) {
		for (let j = 0; j < games[i].length; j++) {
			if (games[i][j] != ':') {
				arr.push(games[i][j]);
			}
		}
	}

	// arr.forEach((element) => {parseInt(element)});
	for (let i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}

	// console.log(arr);
	let team1 = [];
	let team2 = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 != 0) {
			team2.push(arr[i]);
		} else if (i % 2 === 0) {
			team1.push(arr[i]);
		}
	}

	// console.log(arr);
	// Sample output: ['1', '0', '2', '0', '3', '0', '4', '0', '2', '1', '3', '1', '4', '1', '3', '2', '4', '2', '4', '3']
	// console.log(team1);
	// console.log(team2);

	let t1points = 0;
	// let t2points = 0;

	for (let i = 0; i < team1.length; i++) {

		if (team1[i] > team2[i]) {
			t1points += 3;
		} else if (team1[i] < team2[i]) {
			t1points += 0;
		} else if (team1[i] === team2[i]) {
			t1points += 1;
		}

	}
	return t1points;
}

console.log(
	points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);
// console.log(points([
// 				'1:1',
// 				'2:2',
// 				'3:3',
// 				'4:4',
// 				'2:2',
// 				'3:3',
// 				'4:4',
// 				'3:3',
// 				'4:4',
// 				'4:4',
// 			]));
// console.log(points([
// 				'0:1',
// 				'0:2',
// 				'0:3',
// 				'0:4',
// 				'1:2',
// 				'1:3',
// 				'1:4',
// 				'2:3',
// 				'2:4',
// 				'3:4',
// 			]));
// console.log(points([
// 				'1:0',
// 				'2:0',
// 				'3:0',
// 				'4:0',
// 				'2:1',
// 				'1:3',
// 				'1:4',
// 				'2:3',
// 				'2:4',
// 				'3:4',
// 			]));
// console.log(points([
// 				'1:0',
// 				'2:0',
// 				'3:0',
// 				'4:4',
// 				'2:2',
// 				'3:3',
// 				'1:4',
// 				'2:3',
// 				'2:4',
// 				'3:4',
// 			]));
