import React, { Component } from "react";

import Information from "./main/Information";
import Languages from "./main/Languages";
import Introduce from "./main/Introduce";
import Projects from "./main/Projects";

import Cursor from "./main/system/Cursor";
import Navigation from "./main/system/Navigation";

import github from "./main/image/github.png";
import github_mouseover from "./main/image/github_mouseover.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubImg: github,
    };
  }

  handleMouseOver = () => {
    this.setState({
      githubImg: github_mouseover,
    });
  };

  handleMouseOut = () => {
    this.setState({
      githubImg: github,
    });
  };

  render() {
    const { githubImg } = this.state;

    return (
      <div id="home">
        <Navigation />
        <Cursor />
        <div className="title">
          <p className="textWhite">
            <span className="textSkyblue">console</span>.
            <span className="textYellow">log</span>(
            <span className="textOrange">"Hello, HanSeoheun!"</span>);
            <span className="blink">|</span>
          </p>
        </div>
        <div className="text-content">with REACT</div>
        <div className="logo">
          <a
            href="https://github.com/gkstjgms"
            onMouseOver={() => this.handleMouseOver()}
            onMouseOut={() => this.handleMouseOut()}
          >
            <img className="title-logo" src={githubImg} alt="github" />
          </a>
        </div>
        <Information />
        <Languages />
        <Introduce />
        <Projects />
        <div className="last" />
      </div>
    );
  }
  
}

export default Main;
