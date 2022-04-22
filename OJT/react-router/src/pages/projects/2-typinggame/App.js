import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./game/Button";
import Typing from "./game/Typing";
import homeImg from "../home.png";
import "./App.css";

const Homes = [
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
];

const quoteElement = document.getElementsByClassName("quote");
const messageElement = document.getElementsByClassName("message");
const typedValueElement = document.getElementsByClassName("typed-value");
let startTime = Date.now();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: Homes,
      quote: "",
      words: [],
      wordIndex: 0,
      timer: 0,
    };
  }

  handleClick = () => {
    const { quotes, quote, timer } = this.state;

    clearInterval(timer);
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    startTime = new Date().getTime();

    this.setState({
      quote: quotes[quoteIndex],
      words: quote.split(" "),
      wordIndex: 0,
      timer: setInterval(() => {
        const runningtime = new Date().getTime() - startTime;
        messageElement[0].childNodes[0].nodeValue = (
          runningtime / 1000
        ).toFixed(2);
      }, 10),
    });

    // UI updates
    for (const wordElement of quoteElement[0].childNodes) {
      wordElement.className = "";
    }
    quoteElement[0].childNodes[0].className = "highlight";
    messageElement[0].childNodes[0].nodeValue = "";
    typedValueElement[0].value = "";
    typedValueElement[0].focus();
  };

  handleInput = (e) => {
    const { words, wordIndex, timer } = this.state;

    const currentWord = words[wordIndex];
    const typedValue = e.target.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // end of sentence
      clearInterval(timer);
      messageElement[0].childNodes[0].nodeValue = "";
      const elapsedTime = new Date().getTime() - startTime;
      const message = `CONGRATULATIONS! You finished in ${(
        elapsedTime / 1000
      ).toFixed(2)} seconds.`;
      messageElement[0].childNodes[0].nodeValue = message;
    } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
      // end of word
      e.target.value = "";
      let currentIndex = 0;
      for (const wordElement of quoteElement[0].childNodes) {
        wordElement.className = "";
      }
      currentIndex = wordIndex;
      quoteElement[0].childNodes[currentIndex + 1].className = "highlight";

      this.setState({
        wordIndex: wordIndex + 1,
      });
    } else if (currentWord.startsWith(typedValue)) {
      // current correct
      e.target.className = "typed-value";
    } else {
      // error
      e.target.className = "error";
    }
  };

  render() {
    const { words } = this.state;

    return (
      <div className="typing-body">
        <Link to="/">
          <img className="tohome" src={homeImg} alt="to home" />
        </Link>
        <Button onClick={this.handleClick} />
        <div className="typing">
          <p className="quote">
            {words.map((word) => {
              return <span>{word} </span>;
            })}
          </p>
          <Typing onInput={this.handleInput} />
        </div>
        <br />
        <p className="message"> </p>
      </div>
    );
  }
}

export default App;
