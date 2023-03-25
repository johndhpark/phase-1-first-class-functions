function receivesAFunction(callback) {
	callback();
}

function returnsANamedFunction() {
	return callback;

	function callback() {
		console.log("This is a callback function");
	}
}

function returnsAnAnonymousFunction() {
	return () => {
		console.log("This is an anonymous function");
	};
}
