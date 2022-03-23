const first = document.getElementById('first-num');
const second = document.getElementById('second-num');
const operation = document.getElementById('operation');
const result = document.getElementById('result');

document.getElementById('calc').addEventListener('click', () => {
    let output = '';
    switch (operation.value) {
        case '+':
            sum =  Number(first.value) + Number(second.value);
            output = `${sum}`;
            result.innerHTML = output;
            break;
        case '-':
            sum =  Number(first.value) - Number(second.value);
            output = `${sum}`;
            result.innerHTML = output;
            break;
        case '*':
            sum =  Number(first.value) * Number(second.value);
            output = `${sum}`;
            result.innerHTML = output;
            break;
        case '/':
            sum =  Number(first.value) / Number(second.value);
            output = `${sum}`;
            result.innerHTML = output;
            break;
        default:
            console.log(operation.value);
            result.innerHTML = 'ERROR!';
            break;
    }
})