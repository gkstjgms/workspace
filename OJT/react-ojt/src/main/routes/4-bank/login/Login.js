import React, { Component } from "react";
import { Link } from "react-router-dom";

import Register from "./Register";

class Login extends Component {
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
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
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

  // find user - add function
  handleToggle = (id) => {
    const { users } = this.state;
  };

  render() {
    return (
      <div>
        <h1 className="bank-h1">Banking</h1>
        <div class="login-section">
          <h2 className="bank-h2">《 LOGIN 》</h2>
          <form className="loginForm">
            <label className="label" for="user">
              USERNAME
            </label>{" "}
            <input className="bank-input" name="user" type="text" />
            <div className="loginError"></div>
            <Link to="/bank/dashboard">
              <button className="bank-button">LOGIN</button>
            </Link>
          </form>
          <div class="line">OR</div>
          <Register />
        </div>
      </div>
    );
  }
}

export default Login;
