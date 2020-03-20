import React from "react";
import "./header.css";

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header");

function Header(add) {
  return (
    <header className="hero">
      <div className="container">
        <nav className="hero-header">
          <div>
            &lt;&nbsp;<span>Andrey</span> Onipchenko&nbsp;&gt;{" "}
          </div>
          <a className="tel" href="tel:+380680484492">
            +38(068)-048-44-92
          </a>
          <div className="social-links">
            <a
              href="https://github.com/Andreysk8er"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={require("../../img/social/github.svg")} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/andreyfrontenddeveloper/?hl=ru"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={require("../../img/social/instagram.svg")}
                alt="instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100000978386042&ref=bookmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={require("../../img/social/facebook.svg")}
                alt="facebook"
              />
            </a>
          </div>
        </nav>
        <div className="menu-button" onClick={add}></div>
        <div className="hero-content">
          <div>
            <h1 className="hero__title">Front-End Developer</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
