import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // 생명주기 메서드
  // 3. componentDidMount() 생명주기 메서드 호출
  // Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 5. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면
  // React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // 4-1. 매초 브라우저가 tick() 메서드 호출
  // -> Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체(date)를 호출하며 UI 업데이트 진행
  // -> 호출로 인해 state가 변경된 것을 인지, 화면에 표시될 내용을 알아내기 위해 render() 다시 호출
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // 2. render() 메서드 호출 -> 화면에 표시되어야 할 내용을 알게 됨
  // Clock의 렌더링 출력값을 일치시키기 위해 DOM 업데이트
  // 4-2. render() 안의 this.state.date가 달라짐, 렌더링 출력값은 업데이트된 시각을 포함
  // React는 이에 따라 DOM을 업데이트
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// 1. Clock component의 constructor 호출, 현재 시각이 포함된 객체로 this.state 초기화
// ReactDOM.render(<Clock />, document.getElementById("root"));
export default Clock;