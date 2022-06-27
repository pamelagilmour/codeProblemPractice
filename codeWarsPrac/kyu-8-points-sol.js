const points = (games) =>
	games.reduce((output, current) => {
		return (output +=
			current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
	}, 0);
console.log(
	points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);