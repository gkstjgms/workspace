import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div>
        <h2>《 REGISTER 》</h2>
        <form id="registerForm" action="javascript:register()">
          <label className="label" for="user">
            USERNAME
          </label>{" "}
          <input
            className="bank-input"
            name="user"
            type="text"
            maxlength="20"
            required
          />
          <label className="label" for="currency">
            CURRENCY
          </label>{" "}
          <input
            className="bank-input"
            name="currency"
            type="text"
            value="$"
            maxlength="5"
            required
          />
          <label className="label" for="description">
            DISCRIPTION
          </label>{" "}
          <input
            className="bank-input"
            name="description"
            type="text"
            maxlength="100"
          />
          <label className="label" for="balance">
            CURRENT BALANCE
          </label>
          <input
            className="bank-input"
            name="balance"
            type="number"
            value="0"
          />
          <Link to="/bank/dashboard">
            <button className="bank-button">REGISTER</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
