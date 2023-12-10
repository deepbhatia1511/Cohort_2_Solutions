// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function printer(x) {
	setTimeout(() => {
		console.log(x)
	}, 1000 * x)
}

function counter(maxNum, printer) {
   console.log("Your timer⌚⌚ starts now..")
	for (let i = 0; i <= maxNum; i++) {
		printer(i)
	}
}

counter(12, printer)































// (Hint: setTimeout)
