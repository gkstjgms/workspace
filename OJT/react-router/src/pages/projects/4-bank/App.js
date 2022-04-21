import { React, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Register from "./Register";

import "./App.css";

const App = () => {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    currency: "$",
    description: "",
    balance: 0,
    transactions: []
  });
  const { username, currency, description, balance, transactions } = inputs;

  const [users, setUsers] = useState([
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
    }
  ]);

  const [current, setCurrent] = useState({
    description: "",
    currency: "",
    balance: 0,
    transactions: [],
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(2);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      currency,
      description,
      balance,
      transactions
    };
    setUsers(users.concat(user));

    setCurrent({
      description: user.description,
      currency: user.currency,
      balance: user.balance,
    });

    nextId.current += 1;
    navigate("/bank/dashboard/", { state: current });

    setInputs({
      username: "",
      currency: "$",
      description: "",
      balance: 0,
    });
  };

  const status = useRef(false);
  const onSignin = (e) => {
    const { value } = e.target;
    const user = users.find((user) => value === user.username);
    if (user !== undefined) {
      status.current = true;
      setCurrent({
        description: user.description,
        currency: user.currency,
        balance: user.balance,
        transactions: user.transactions,
      });
    }
  };

  const onLogin = () => {
    if (status.current) {
      navigate("/bank/dashboard/", { state: current });
      status.current = false;
    } else {
      alert("없는 username입니다.");
    }
  };

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
            <input
              className="bank-input"
              name="username"
              type="text"
              onChange={onSignin}
            />
            <div className="loginError"></div>
            <button className="bank-button" onClick={onLogin}>
              LOGIN
            </button>
          </form>
          <div className="line">OR</div>
          <Register inputs={inputs} onChange={onChange} onCreate={onCreate} />
        </div>
      </div>
    </div>
  );
};

export default App;
