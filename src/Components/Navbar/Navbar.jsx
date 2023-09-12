import "./navba.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt">What is GPT?</a>
    </p>
    <p>
      <a href="#posibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Libary</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt4-navbar">
      <div className="gpt4-navbar-links">
        <div className="gpt4-navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt4-navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt4-navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt4-navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            onClick={() => setToggleMenu(false)}
            style={{ color: "#fff", fontSize: "27px" }}
          />
        ) : (
          <RiMenu3Line
            onClick={() => setToggleMenu(true)}
            style={{ color: "#fff", fontSize: "27px" }}
          />
        )}
        {toggleMenu && (
          <div className="gpt4-navbar-menu-container scale-up-center">
            <div className="gpt4-navbar-menu-container-links">
              <Menu />
              <div className="gpt4-navbar-menu-container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
