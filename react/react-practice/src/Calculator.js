import React, { Component } from "react";

// 숫자 변환 함수
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// temperature 값 출력
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  // 올바르지 않은 입력값에 빈 문자열 반환
  if (Number.isNaN(input)) {
    return "";
  }

  // 소수점 세번째 자리 반올림 출력
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemparatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // Before: this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    // c 또는 f의 값을 가질 수 있는 prop
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// 부모 class
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  // 가장 최근에 변경된 입력값과 그 값이 나타내는 단위 저장
  // 두 입력 필드의 값이 동일한 state로부터 계산 -> 항상 동기화된 상태 유지
  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  // UI
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemparatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemparatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
