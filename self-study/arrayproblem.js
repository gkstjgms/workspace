// ***문제: 입력 받은 배열의 마지막에 "banana"를 추가 후 반환하세요
let value = ['apply', 'pie', 'fig', 'melon', 'pear', 'fig', 'melon', 'pear', 'peach'];

function solution1 (inputValue){
    let newvalue = inputValue.filter((item, index) => {
        return inputValue.indexOf(item) === index; 
        // 앞쪽에 있었던 단어의 경우 제일 첫 번째 순서의 요소 index가 반환되므로 불일치 시 newvalue에 삽입되지 않는다 -> 중복 삭제
    });

    newvalue.push('banana');

    return newvalue;
}
// console.log(solution1(value));

// ***문제: 입력 받은 배열의 순번과 값을 모두 출력하세요.
value = solution1(value); 
value.pop(); // value = ['apply', 'pie', 'fig', 'melon', 'pear', 'peach']

function solution2 (inputValue){
    let inorder = inputValue.forEach(function(item, index){
        // console.log(`${item} ${index}`);
    })
}
solution2(value);

let lastitem = value.pop();
// console.log(value);

// ***문제: 배열에 자주 등장하는 숫자를 k값만큼 차례대로 return
// 출처: https://velog.io/@geonoo99/JS-Array.map-과-Array.forEach
let array = [1, 1, 1, 2, 2, 3]
let k = 2;
function solution3 (inputArray){
    let countitem = inputArray.reduce(function(sum, item){
        if (item in sum){
            sum[item]++;
        } else {
            sum[item] = 1;
        }
        return sum;
    }, {})
    console.log(countitem);
}
solution3(array);
// console.log(solution3(array));