import React from "react";

const Register = ({ inputs, onChange, onCreate }) => {
  return (
    <div>
      <h2>《 REGISTER 》</h2>
      <label className="label" for="user">
        USERNAME
      </label>
      <input
        className="bank-input"
        name="username"
        type="text"
        maxLength="20"
        onChange={onChange}
        value={inputs.username}
        required
      />
      <label className="label" for="currency">
        CURRENCY
      </label>
      <input
        className="bank-input"
        name="currency"
        type="text"
        onChange={onChange}
        value={inputs.currency}
        maxLength="5"
        required
      />
      <label className="label" for="description">
        DESCRIPTION
      </label>
      <input
        className="bank-input"
        name="description"
        type="text"
        maxLength="100"
        onChange={onChange}
        value={inputs.description}
      />
      <label className="label" for="balance">
        CURRENT BALANCE
      </label>
      <input
        className="bank-input"
        name="balance"
        type="number"
        onChange={onChange}
        value={inputs.balance}
      />
      <button className="bank-button" onClick={onCreate}>
        REGISTER
      </button>
    </div>
  );
};

export default Register;
