import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

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
          maxLength="20"
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
          maxLength="5"
          required
        />
        <label className="label" for="description">
          DISCRIPTION
        </label>{" "}
        <input
          className="bank-input"
          name="description"
          type="text"
          maxLength="100"
        />
        <label className="label" for="balance">
          CURRENT BALANCE
        </label>
        <input className="bank-input" name="balance" type="number" value="0" />
        <button
          className="bank-button"
          onClick={() => navigate("/bank/dashboard")}
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;
