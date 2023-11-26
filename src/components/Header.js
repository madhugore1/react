import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header rendered");

  // useEffect with no depedency array will be called for each rendering of the component
  useEffect(() => {
    console.log("useEffect with no depedency array");
  });

  // useEffect with empty depedency array will be called only after the initial component render (just once)
  useEffect(() => {
    console.log("useEffect with empty depedency array");
  }, []);

  // useEffect with depedency array will be called only when the dependencies change
  useEffect(() => {
    console.log("useEffect with depedency array");
  }, [btnName]);

  const handleBtnClick = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleBtnClick}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
