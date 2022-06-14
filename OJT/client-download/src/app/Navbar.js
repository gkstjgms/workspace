import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/semits.png";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="semits logo" />
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
