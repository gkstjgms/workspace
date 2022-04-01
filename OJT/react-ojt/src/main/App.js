import React, { Component } from "react";

import Information from "./Information";
import Languages from "./Languages";
import Introduce from "./Introduce";
import Projects from "./Projects";

import Cursor from "./Cursor";

import github from "./image/github.png";
import github_mouseover from "./image/github_mouseover.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubImg: github,
      x: 0,
      y: 0
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
    const { x, y, githubImg } = this.state;

    return (
      <div>
        <Cursor />
        <div>
          <p>
            <span>console</span>.<span>log</span>(
            <span>"Hello, HanSeoheun!"</span>);
            <span>|</span>
          </p>
          <a
            href="https://github.com/gkstjgms"
            onMouseOver={() => this.handleMouseOver()}
            onMouseOut={() => this.handleMouseOut()}
          >
            <img src={githubImg} alt="github" />
          </a>
        </div>
        <Information />
        <Languages />
        <Introduce />
        <Projects />
      </div>
    );
  }
}

export default App;
