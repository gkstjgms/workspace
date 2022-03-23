let currentMoney = 100;
let laptopPrice = 120;
let laptopDiscountP = laptopPrice * .90;

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountP){
    console.log("Getting a new laptop!");
}
else {
    console.log("Can't afford a new laptop, yet!");
}

let result = currentMoney >= laptopPrice || currentMoney >= laptopDiscountP ? console.log("Getting a new laptop!") : console.log("Can't afford a new laptop, yet!");