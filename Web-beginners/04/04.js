console.log(myVar); // DEBUG: undefined
var myVar;
myVar = 123; 
console.log(myVar); // DEBUG: 123

// console.log(myLet); ERROR: Cannot access 'myLet' before initialization, 실행 불가
let myLet;
myLet = 123;
console.log(myLet); // DEBUG: 123, 실행 가능

const obj = { a: 3 };
// obj = { b: 5 }; ERROR: Assignment to constant variable.
console.log(obj.a); // DEBUG: 3
obj.a = 5;
console.log(obj.a); // DEBUG: 5

// string과 number 구분 주의
let num = 123;
let str = '123';
console.log(num == str); // true -> 변수의 값만 확인 (wrong)
console.log(num === str); // false -> 변수의 값, 형식 확인 (good)

// formatting strings
let str1 = "Hello";
let str2 = "World";
console.log(`${str1} ${str2}!`); // Hello World!
str2 = "Space";
console.log(`${str1} ${str2}!`); // Hello Space!