import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import Register from "./login/Register";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        username: "",
        currency: "",
        description: "",
        balance: 0,
      },
      users: [
        {
          id: 1,
          username: "test",
          currency: "$",
          description: "Test account",
          balance: 75,
          transactions: [
            { id: "1", date: "2020-10-01", object: "Pocket money", amount: 50 },
            { id: "2", date: "2020-10-03", object: "Book", amount: -10 },
            { id: "3", date: "2020-10-04", object: "Sandwich", amount: -5 },
          ],
        },
      ],
      current: {
        description: "",
        balance: 0,
        currency: "",
        transactions: [],
      },
    };
  }

  /*
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
    console.log(value);
  };

  id = 2;
  handleCreate = () => {
    const { username, currency, description, balance, users } = this.state;

    const user = {
      id: this.id,
      username,
      currency,
      description,
      balance,
    };

    this.setState({
      users: users.concat(user),
      username: "",
      currency: "",
      description: "",
      balance: "",
    });

    this.id += 1;
  };
  */

  handleLogin = (e) => {
    e.preventDefault();
    let navigate = useNavigate();
    navigate("/bank/dashboard");
  };

  render() {
    return (
      <div className="bank-body">
        <div>
          <h1 className="bank-h1">Banking</h1>
          <div className="login-section">
            <h2 className="bank-h2">《 LOGIN 》</h2>
            <form className="loginForm">
              <label className="label" for="user">
                USERNAME
              </label>{" "}
              <input className="bank-input" name="username" type="text" />
              <div className="loginError"></div>
              <button className="bank-button">LOGIN</button>
            </form>
            <div className="line">OR</div>
            <Register />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
