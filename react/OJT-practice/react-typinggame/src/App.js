import React, { Component } from "react";
// import Button from "./game/Button";
// import Typing from "./game/Typing";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
        "There is nothing more deceptive than an obvious fact.",
        "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
        "I never make exceptions. An exception disproves the rule.",
        "What one man can invent another can discover.",
        "Nothing clears up a case so much as stating it to another person.",
        "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
        "The game is on.",
        "Beacuse Sherlock Holmes is a great man. And I think one day, if we are very very lucky, he might even be a good one.",
        "I am not a psychopath, Anderson. I am a high-functioning sociopath. Do your research.",
        "Do not make people into heroes, John. Heroes do not exist. And if they did, I would not be one of them.",
        "I do not have friends. Just got one.",
        "Keep your eyes fixed on me! Please, will you do this for me? This phone call. Its my note. For people do, dont they? Leave a note. Goodbye, John.",
        "For me, do not be dead. Would you do that just for me? just stop if, stop this.",
        "What life? I have been away.",
        "Miss me?",
      ],
      quote: "",
      words: [],
      wordIndex: 0,
    };
  }

  handleClick = () => {
    const { quotes, quote, words } = this.state;

    const quoteIndex = Math.floor(Math.random() * quotes.length);

    this.setState({
      quote: quotes[quoteIndex],
      words: quote.split(" "),
      wordIndex: 0,
    });

    const spanWords = words.map(function (word) {
      return `<span>${word} </span>`;
    });
    const sentence = spanWords.join("");
    console.log(sentence);
  };

  render() {
    const { words } = this.state;

    const spanWords = words.map(function (word) {
      return `<span>${word} </span>`;
    });
    const sentence = spanWords.join("");

    return (
      <div>
        <h1>Typing game!</h1>
        <p>
          Practice your typing skills with a quote from{" "}
          <cite>
            <b>Sherlock Homes</b>
          </cite>
          . When you press <b>spacebar</b>, <mark>highlight</mark> goes to next
          word.
        </p>
        <p>
          Click&nbsp;
          <button onClick={this.handleClick}>
            <b>Start</b>
          </button>
          &nbsp;button to begin!
        </p>
        <div className="typing">
          <p className="quote">
            {words.map((word) => (
              <span>{word}&nbsp;</span>
            ))}
          </p>
          <input type="text" className="typed-value" />
        </div>
        <br />
        <p className="message">message</p>
      </div>
    );
  }
}

export default App;
