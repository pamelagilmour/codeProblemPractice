// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {

    if (
			(p1 === 'rock' && p2 === 'scissors') ||
			(p1 === 'scissors' && p2 === 'paper') ||
			(p1 === 'paper' && p2 === 'rock')
		) {
			return `Player 1 won!`;
		} else if (
            (p1 === 'scissors' && p2 === 'rock') || 
            (p1 === 'paper' && p2 === 'scissors') || 
            (p1 === 'rock' && p2 === 'paper') 
        ) {
            return `Player 2 won!`;

        } else if(p1 === p2) {
            return `Draw!`;
        }

};

//p1 wins tests
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));

//p2 wins tests
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));

//draw tests:
console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));



//Tests:
// describe('rock paper scissors', function () {
	// const getMsg = (n) => `Player ${n} won!`;

	// it('player 1 win', function () {
	// 	Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
	// 	Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
	// 	Test.assertEquals(rps('paper', 'rock'), getMsg(1));
	// });

	// it('player 2 win', function () {
	// 	Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
	// 	Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
	// 	Test.assertEquals(rps('rock', 'paper'), getMsg(2));
	// });

// 	it('draw', function () {
// 		Test.assertEquals(rps('rock', 'rock'), 'Draw!');
// 		Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
// 		Test.assertEquals(rps('paper', 'paper'), 'Draw!');
// 	});
// });

// My favorite solutions:

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };