const timer = (time) => {
  return new Promise((resolve, reject) => {
    console.log(`${time} 타이머 시작`);
    setTimeout(() => {
      console.log(`${time} 타이머 끝`);
      resolve();
    }, time);
  });
};

async function runPromiseAll() {
  const times = [3000, 1000, 7000, 5000];

  await Promise.all(times.map((time) => timer(time)));

  console.log('모든 타이머 끝');
}
// runPromiseAll();

async function runForAwait() {
  const times = [3000, 1000, 7000, 5000];

  for await (let time of times) {
	  await timer(time);
  }

  console.log('모든 타이머 끝');
}
runForAwait();