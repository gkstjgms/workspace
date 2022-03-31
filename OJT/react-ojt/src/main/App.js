import React, { Component } from "react";
import Information from "./Information";
import Languages from "./Languages";
import Introduce from "./Introduce";
import Projects from "./Projects";

import github from "./image/github.png";
import github_mouseover from "./image/github_mouseover.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubImg: github,
    };
  }

  handleMouse = () => {
    
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
    const githubImg = this.state.githubImg;

    return (
      <div>
        <div class="cursor"></div>
        <div>
          <p>
            <span>console</span>.<span>log</span>(
            <span>"Hello, HanSeoheun!"</span>);
            <span>|</span>
          </p>
          <a
            href="https://github.com/gkstjgms"
            target="_blank"
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
