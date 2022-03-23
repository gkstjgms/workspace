let strarr = ['a', 'b', 'c', 'd', 'e'];
let numarr = [1, 2, 3, 4, 5];

// 1. forEach
console.log("1. forEach")
let printarr;
strarr.forEach(function(item, index, array){
    console.log(`${index+1}'s alphabet : ${item}`);
    printarr = array;
})
console.log(printarr);

// 2. map
console.log("\n2. map")
let maparr = strarr.map(item => item + item);
console.log(`기존 strarr: [${strarr}]`);
console.log(`map을 통한 strarr: [${maparr}]`); 

// 3. reduce
console.log("\n3. reduce");
let reducestr = strarr.reduce( (sum, item) => sum + item);
console.log(`strarr 요소들의 합: ${reducestr}`);
let reducenum = numarr.reduce( (sum, item) => sum + item, 5);
console.log(`numarr 요소들의 합(초기값 10): ${reducenum}`); // 15 + 5

// 객체 배열에서의 값 합산: 반드시 초기값 필요
console.log("---객체 배열에서의 값 합산---");
let initialValue = 0;
let reducesum_1 = [{x: 1}, {x: 2}, {x: 3}].reduce( (sum, item) => sum + item.x, initialValue)
console.log(`initialValue = 0 -> ${reducesum_1}`); // 0 + 1 + 2 + 3
initialValue = 1
let reducesum_2 = [{x: 1}, {x: 2}, {x: 3}].reduce( (sum, item) => sum + item.x, initialValue)
console.log(`initialValue = 1 -> ${reducesum_2}`); // 4 + 1 + 2 + 3

// 객체 내 인스턴스 개수 새기
console.log("---객체 내 인스턴스 개수 세기---");
let year = [95, 95, 96, 97, 98, 96, 96, 97, 99, 95, 96, 97, 98];
let countyear = year.reduce(function(allyear, item){
    if (item in allyear){
        allyear[item]++;
    } else {
        allyear[item] = 1;
    }
    return allyear; // sum 항목이 객체 형식으로 구성됨
}, {})
console.log(countyear); // {95: 3, 96: 4, 97: 3, 98: 2, 99: 1}

// 4. filter
console.log("\n4. filter");
let filarr = numarr.filter(function(item){
    return item > 2;
})
console.log(`array에서 2보다 큰 수: [${filarr}]`);

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
console.log("---배열 내용 검색---");
function filteritem(query){
    return fruits.filter(function(item){
        return item.indexOf(query) > -1;
    })
}
console.log(`fruits included 'ap': ${filteritem('ap')}`); // apple, grapes
console.log(`fruits included 'an': ${filteritem('an')}`); // banana, mango, orange
