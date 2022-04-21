import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="text-div" id="information">
        <p className="text-title">
          <span className="textGray">&lt;</span>
          <span className="textBlue">h1</span>
          <span className="textGray">&gt;</span>
          Information
          <span className="textGray">&lt;</span>
          <span className="textBlue">/h1</span>
          <span className="textGray">&gt;</span>
          <span className="blink">|</span>
        </p>
        <p className="text-content">
          <b>韓 抒 欣</b>
          <br />
          1998. 03. 04. 출생
          <br />
          <b>RH+ A</b>형, <b>MBTI</b> ISFP
          <br />
          〈2017년〉경희대학교 컴퓨터공학과 입학
          <br />
          〈2022년〉경희대학교 컴퓨터공학과 졸업
          <br />
          〈현재〉(주) 세미티에스 연구원
        </p>
      </div>
    );
  }
}

export default Information;
