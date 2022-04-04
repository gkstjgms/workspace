import React, { Component } from "react";

import terrarium from "./image/terrarium.png";
import typing from "./image/typing.png";
import space from "./image/space.png";
import banking1 from "./image/banking1.png";
import banking2 from "./image/banking2.png";

class Projects extends Component {
  render() {
    return (
      <div className="text-div">
        <p className="text-title">
          <span className="textGray">&lt;</span>
          <span className="textBlue">h1</span>
          <span className="textGray">&gt;</span>
          Web beginners Projects
          <span className="textGray">&lt;</span>
          <span className="textBlue">/h1</span>
          <span className="textGray">&gt;</span>
          <span className="blink">|</span>
        </p>
        <p className="textbox-content">
          "이미지를 클릭하면 해당 project의 HTML 페이지로 이동합니다!"
        </p>
        <div className="project-line1">
          <div className="project-1">
            <p className="project-title">
              <span className="textGray">&lt;</span>
              <span className="textBlue">h2</span>
              <span className="textGray">&gt;</span>
              Terrarium
              <span className="textGray">&lt;</span>
              <span className="textBlue">/h2</span>
              <span className="textGray">&gt;</span>
            </p>
            <div>
              <p className="textbox-content">
                {" "}
                HTML을 사용하여 페이지의 뼈대를 잡고, CSS를 사용해 페이지의
                요소들을 배치, 그리고 마지막으로 JS를 사용해 페이지 양 옆에
                정렬해둔 식물을 마우스의 drag & drop으로 직접 꾸밀 수 있도록
                설정했습니다. 추가적으로 식물 이미지를 두 번 클릭하면 z-index의
                값을 가장 최대로 만들어 맨 앞으로 배치할 수 있게 하는 function을
                추가했습니다.{" "}
              </p>
            </div>
            <img src={terrarium} />
          </div>
          <div className="project-2">
            <p className="project-title">
              <span className="textGray">&lt;</span>
              <span className="textBlue">h2</span>
              <span className="textGray">&gt;</span>
              Typing-game
              <span className="textGray">&lt;</span>
              <span className="textBlue">/h2</span>
              <span className="textGray">&gt;</span>
            </p>
            <div>
              <p className="textbox-content">
                {" "}
                HTML의 요소를 JS 파일에 가져와, 미리 입력된 문장을 가지고 타자
                연습을 할 수 있도록 event에 따라 화면을 구상했습니다. 추가적으로
                Start 버튼을 눌렀을 때부터의 시간을 실시간으로 볼 수 있도록
                타자를 치는 칸 밑에 초시계 기능을 넣었습니다.{" "}
              </p>
            </div>
            <img src={typing} />
          </div>
        </div>
        <div className="project-line2">
          <div className="project-3">
            <p className="project-title">
              <span className="textGray">&lt;</span>
              <span className="textBlue">h2</span>
              <span className="textGray">&gt;</span>
              Space-game
              <span className="textGray">&lt;</span>
              <span className="textBlue">/h2</span>
              <span className="textGray">&gt;</span>
            </p>
            <div>
              <p className="textbox-content">
                {" "}
                Class 상속을 통해 게임 아바타 개체들을 구현하고 화면을 구성하는
                각 요소들의 행동 범위를 설정했습니다. 적 개체와 플레이어 개체의
                충돌 판정, 그리고 레이저와 적 개체의 충돌 판정을 통해 각각
                플레이어의 생명 수와 점수가 조절되도록 코드를 구성했습니다.
              </p>
            </div>
            <img src={space} />
          </div>
          <div className="project-4">
            <p className="project-title"> 
              <span className="textGray">&lt;</span>
              <span className="textBlue">h2</span>
              <span className="textGray">&gt;</span>
              Bank-project
              <span className="textGray">&lt;</span>
              <span className="textBlue">/h2</span>
              <span className="textGray">&gt;</span>
            </p>
            <div>
              <p className="textbox-content">
                {" "}
                template을 사용하여 홈페이지의 route를 나누었습니다.
                커리큘럼에서 제공해준 gateway 5000을 이용하여 은행 시스템에
                계정을 등록하고 등록한 계정으로 로그인하여, 다른 페이지에서 해당
                계정에 대한 정보를 표기하도록 설정했습니다. <br /> ('api'
                폴더에서 서버 실행 후 접속이 가능합니다. 현재 페이지 관람 불가.){" "}
              </p>
            </div>
            <img className="img4" src={banking1} />
            <img className="img4" src={banking2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
