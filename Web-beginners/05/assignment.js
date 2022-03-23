// 1
function yesreturn(fruit = 'apple'){
    const which = `${fruit} is the best.`;
    return which;
}

function noreturn(fruit = 'apple'){
    console.log(`${fruit} is the best.`);
}

const answer = yesreturn('strawberry');
console.log(answer);
noreturn('strawberry');

// 2
function person(name='Eve', sex='Female', age=17, like='Cat', hate='Dog'){
    console.log('\n~Introduce~');
    console.log(`Hello, my name is ${name}.
    I'm ${sex}, and ${age} years old.
    I like ${like}, and I hate ${hate}.`);
}
person(); // default
person('Emil', 'Male', '18', 'Dog', 'Cat');