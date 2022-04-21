import React, { Component } from "react";

class Introduce extends Component {
  render() {
    return (
      <div className="text-div" id="introduce">
        <p className="text-title">
        <span className="textGray">&lt;</span>
          <span className="textBlue">h1</span>
          <span className="textGray">&gt;</span>
          Introduce myself!
          <span className="textGray">&lt;</span>
          <span className="textBlue">/h1</span>
          <span className="textGray">&gt;</span>
          <span className="blink">|</span>
        </p>
        <div className="textbox">
          <p className="textbox-content">
            안녕하세요! 개발자의 꿈을 키워가고 있는 ✨한서흔✨ 입니다. <br />
            <br /> 저는 프로그램을 작동시키는 일을 정말 좋아합니다. 어려서부터
            소프트웨어 류의 기계를 사용하는 일에 항상 호기심을 가지고 놀곤
            했으며, 때문에 자연스럽게 컴퓨터 프로그램에 관한 공부를 시작하게
            되었습니다. 대학교의 컴퓨터공학과에 진학하여 C++, Python 언어를
            위주로 학습하였고, 자료구조와 데이터베이스의 형식 등 프로그램이
            어떻게 동작하고 그것을 어떤 방식으로 이용할 수 있는지 관련된
            개념들을 배웠습니다. 직접 코드를 작성하여 동작하는 프로그램을 보면
            뿌듯하고 기쁜 마음이 듭니다. 그래서 제가 아직도 개발자가 되기를
            포기할 수 없는 게 아닐까요. <br />
            <br />
            현재는 HTML/CSS를 바탕으로 JS 코드를 작성하여 웹 사이트에 여러가지
            효과를 넣고, 서버를 연결하는 공부를 하고 있습니다. 무언가를
            개발한다는 것은 결코 쉽지 않은 일이지만, 스스로 만족할 수 있는
            정상에 오르기 위해 많은 것을 배우고 계속해서 노력하고 있습니다.{" "}
            <br />
            언젠가는 제가 개발한 프로그램을 사람들이 많이 사용해줄 날이 오리라
            믿습니다. :)
          </p>
        </div>
      </div>
    );
  }
}

export default Introduce;
