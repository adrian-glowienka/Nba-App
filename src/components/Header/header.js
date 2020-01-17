import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./SideNav/sideNav";
const Header = props => {
  const navBars = () => {
    return (
      <div className="bars-font">
        <FontAwesomeIcon
          onClick={props.onOpenNav}
          icon={faHome}
          name="bars"
          style={{
            color: "#dfdfdf",
            padding: "10px",
            cursor: "pointer"
          }}
        />
      </div>
    );
  };

  const logo = () => {
    return (
      <Link to="/" className="logo">
        <img alt="nba logo" src="/images/nba_logo.png"></img>
      </Link>
    );
  };
  return (
    <header className="header">
      <SideNav {...props} />
      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
