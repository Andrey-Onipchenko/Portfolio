import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_wrap">
      <div className="container">
        <nav className="footer__content">
          <div className="footer_name">
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
      </div>
    </div>
  );
}

export default Footer;
