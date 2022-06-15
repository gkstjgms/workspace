import React, { useState } from "react";
import logo from "../../app/img/semits.png";
import { IoMdLogIn } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { iUserInfo, userLogined } from "../../redux/features/loginSlice";
import { RootState } from "../../redux/store";

// pw 지정, 일치 검사 필요
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.user);
  const [pw, setPw] = useState("");

  const onLogin = () => {
    console.log("login");
    const userInfo: iUserInfo = {
      pw: pw,
    };

    dispatch(userLogined(userInfo));
    navigate("/main");
  };

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      onLogin();
    }
  };

  if (users.isLogined) {
    navigate("/main");
  }

  return (
    <div className="login-template" onKeyPress={onCheckEnter}>
      <img className="login-logo" src={logo} alt="semits logo" />
      <div className="login-block">
        <h1>Login</h1>
      </div>
      <div className="insert-form">
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
      <IoMdLogIn className="login-button" onClick={onLogin} />
    </div>
  );
};

export default Login;
