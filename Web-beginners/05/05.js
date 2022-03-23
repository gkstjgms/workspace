function nameOfFunction() {
    // function body
}

function displayWorld() {
    console.log('Hello, world!');
}

// function call
displayWorld();

// add parameter(argument), default values
function displayGreeting(name, salutation='Hallo') {
    console.log(`${salutation}, ${name}`);
}

displayGreeting('Chris'); // Hello, Chris (default) 
displayGreeting('Chris', 'Hi'); // Hi, Chris 

// return values
function createGM(name) {
    const message = `~Hello, ${name}`;
    return message;
}
const gm = createGM('Chris');
console.log(gm);

// functions as parameters for functions
function displayDone(){
    console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000); // begins a timer, will execute code(displayDone) when it completes.
// anonymous functions -> 함수 이름 미지정
setTimeout(function() {
    console.log('6 seconds has elapsed');
}, 6000);
// arrow function
setTimeout(() => {
    console.log('9 seconds has elapsed');
    console.log('\nFin.');
}, 9000);