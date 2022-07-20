import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";

function TodoLogin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <>
      <div className="login-head-block">
        <h1>Login</h1>
      </div>
      <div className="login-insert-form">
        <h2>Id</h2>
        <form className="input-id">
          <input
            className="login-input"
            placeholder="Id"
            onChange={(e) => setId(e.target.value)}
          />
        </form>
        <h2>Password</h2>
        <form className="insert-pw">
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          />
        </form>
      </div>
      <button className="login-button">
        <IoMdLogIn />
      </button>
    </>
  );
}

export default React.memo(TodoLogin);
