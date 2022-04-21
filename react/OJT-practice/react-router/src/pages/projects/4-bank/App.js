import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import Register from "./Register";

import "./App.css";

const App = () => {
  let navigate = useNavigate();

  const setLogin = () => {
    navigate("/bank/dashboard");
  }

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
            <button
              className="bank-button"
              onClick={() => setLogin()}
            >
              LOGIN
            </button>
          </form>
          <div className="line">OR</div>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default App;
