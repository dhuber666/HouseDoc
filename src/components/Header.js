import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <Link to="/" className="header-title">
      HouseDoc
    </Link>
    <a href="/">
      <i className="fa fa-plus fa-4x" />
    </a>
    <div className="header-account-section">
      <a href="/">My Account</a>
      <div className="header-account-section-vert-rule" />
      <a href="/">Logout</a>
    </div>
  </div>
);

export default Header;
