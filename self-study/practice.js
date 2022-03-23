function promiseTimeout(ms) {
	return new Promise((resolve, reject) => {
			setTimeout(resolve, ms);
	});
}

async function simulateLongOperation() { // indicates function will have an await
		await promiseTimeout(5000); // pauses while operation completes
		return 42; // = Promise.resolve(42)
}

async function run() {
		const answer = await simulateLongOperation();
		console.log(answer);
}

run(); // 42