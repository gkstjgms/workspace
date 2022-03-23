// array
let iceCreamFlavors = ["Strawberry", "Vanilla", "Pistachio", "Chocolate"];
iceCreamFlavors[1] // "Vanilla"

// change value
iceCreamFlavors[2] = "Cherry"; // changed "Pistachio" to "Cherry"

// add new vaule
iceCreamFlavors[4] = "Cookie Dough"; // added "Cookie Dough"

// length - array times 개수
console.log(iceCreamFlavors.length); // 5

// loops
for(let i = 0; i < 3; i++) { // (counter; condition; iteration-expression) 
    console.log(i);
}

let i = 0;
while (i < 3) { // (condition)
    console.log(i);
    i++;
}

// loops and arrays
for (let i = 0; i < iceCreamFlavors.length; i++) {
    console.log(iceCreamFlavors[i]);
}