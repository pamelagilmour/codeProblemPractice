//Skipped and forfeited this kata
// Something is wrong with the test

// Square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num) {

	// for negative numbers
	if (num < 0) {
		// make an array from the number, convert num into a string
		let numArr = Array.from(num.toString());
		numArr.shift();
		// console.log(numArr);
		// console.log(typeof numArr[0]);

		// for each element in the numArr, push to the intArr but first parse the element into an int.
		let intArr = [];
		numArr.forEach((element) => intArr.push(parseInt(element)));
		// console.log(intArr);
		// console.log(typeof intArr[0]);

		// square each number in the array
		let squArr = [];
		intArr.forEach((element) => squArr.push(Math.pow(element, 2)));
		// console.log(squArr);
		// console.log(typeof squArr[0]);

		// convert each number into a string
		let strArr = [];
		squArr.forEach((element) => strArr.push(element.toString()));
		// console.log(strArr);
		// console.log(typeof strArr[0]);

		// concatenate the array of strings
		let lastArr = strArr.join('');
		console.log(typeof lastArr);
		console.log(lastArr);
        return lastArr;
	} else if( num > 0) {

        //for positive numbers
        	// if (num < 0) {
		// make an array from the number, convert num into a string
		let numArr = Array.from(num.toString());
		// numArr.shift();
		// console.log(numArr);
		// console.log(typeof numArr[0]);

		// for each element in the numArr, push to the intArr but first parse the element into an int.
		let intArr = [];
		numArr.forEach((element) => intArr.push(parseInt(element)));
		// console.log(intArr);
		// console.log(typeof intArr[0]);

		// square each number in the array
		let squArr = [];
		intArr.forEach((element) => squArr.push(Math.pow(element, 2)));
		// console.log(squArr);
		// console.log(typeof squArr[0]);

		// convert each number into a string
		let strArr = [];
		squArr.forEach((element) => strArr.push(element.toString()));
		// console.log(strArr);
		// console.log(typeof strArr[0]);

		// concatenate the array of strings
		let lastArr = strArr.join('');
		console.log(typeof lastArr);
		console.log(lastArr);
        return lastArr;

    }


	
}

squareDigits(-9119);

squareDigits(193456);
squareDigits(-45679);
squareDigits(45679119);
squareDigits(-9134519);
squareDigits(-919);