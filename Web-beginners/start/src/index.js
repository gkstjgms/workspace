// 1-1. form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// 1-2. result
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

// Carbon Usage 값이 색상 배열에 표시된 인덱스에서 가장 가까운 색상 값을 chrome runtime에 전달
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } }); // Carbon Usage 수치에 맞게 색상 변경
}

// 6. query the API
// module import
import axios from '../node_modules/axios';

// async -> function의 비동기적 호출
async function displayCarbonUsage(apiKey, region) {
	try { // no error
		await axios
            // apiKey를 이용해 입력된 region의 데이터를 받아온다
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
            // API response가 있다면 -> responsed 데이터 출력
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);
				calculateColor(CO2); // Carbon Usage 값을 전달

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) { // error 발생시 / no result 발생 시 출력 화면
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}

// 5. set up the user
// loading message page
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
    clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName); // API에 연결이 언제될지 알 수 없으므로 asumc을 통해 비동기적 호출을 진행
}

// 4. handle the form submission
function handleSubmit(e) {
	e.preventDefault(); // event를 처리하지 않은 경우, 해당 이벤트에 대한 기본 동작을 실행하지 않도록 지정
	setUpUser(apiKey.value, region.value); // apiKey.value, region.value를 setUpUser 함수에 전달
}

// 3. build out the init() & reset() function which initializes the extension called init()
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	chrome.runtime.sendMessage({
        action: 'updateIcon',
            value: {
                color: 'green', // default color
            },
    });

	if (storedApiKey === null || storedRegion === null) { // input 화면
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else { // result 화면
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion); 
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) { // 'Change region' click시 발생
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName'); // storedRegion === null
	init();
}

// 2. add event listeners 
// 유저가 form을 입력하거나 reset 버튼을 눌렀을 경우 이벤트 발생
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();