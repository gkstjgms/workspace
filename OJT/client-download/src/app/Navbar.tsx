import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/semits.png";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

import { userLogouted } from "../redux/features/loginSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state);

  const onLogout = () => {
    dispatch(userLogouted(users));
    navigate("/");
  };

  return (
    <nav>
      <section className="top-bar">
        <img className="logo" src={logo} alt="semits logo" />
        <Link to="/" className="logout" onClick={onLogout}>
          Logout
        </Link>
      </section>

      <section>
        <Link to="/main" className="navber-title">
          Releases
        </Link>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/dbm">DBM</Link>
            <Link to="/gui">GUI</Link>
            <Link to="/scm">SCM</Link>
            <Link to="/smm">SMM</Link>
            <Link to="/tcm">TCM</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
