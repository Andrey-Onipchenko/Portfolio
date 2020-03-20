import React from "react";
import "./portfolio.css";
// import data from "../../db/db.json";

// const template = Object.keys(data.projects).map(item => (
//   <span key={data.project[item].id}>
//     {data.books[item].author} - {data.books[item].name}
//   </span>
// ));

function Portfolio() {
  return (
    <div className="portfolio__wrap">
      <div className="container">
        <h3 className="portfolio__title">Portfolio</h3>
        <div className="cards ">
          <div className="card">
            <h3 className="card__title">The Witcher</h3>
            <div className="card-wrp">
              <img
                className="card__img"
                src={require("../../img/project_2.png")}
                alt="Ведьмак"
              />
              <div className="card__modal"></div>
              <div className="card__icon">
                <button className="icon__btn">
                  <a
                    href="https://andreysk8er.github.io/The_Witcher/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={require("../../img/icon/web.png")}
                      alt="web"
                    />
                  </a>
                </button>
                <button className="icon__btn ">
                  <a
                    href="https://github.com/Andreysk8er/The_Witcher/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/icon/git_icon.png")}
                      alt="GitHub"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* /Card one */}
          <div className="card">
            <h3 className="card__title">Landing page Creative-Digital</h3>
            <div className="card-wrp">
              <img
                className="card__img"
                src={require("../../img/project-img-creatives.png")}
                alt="creatives"
              />
              <div className="card__modal"></div>
              <div className="card__icon">
                <button className="icon__btn">
                  <a
                    href="https://andreysk8er.github.io/Creative-Digital/build/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={require("../../img/icon/web.png")}
                      alt="web"
                    />
                  </a>
                </button>
                <button className="icon__btn ">
                  <a
                    href="https://github.com/Andreysk8er/Creative-Digital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/icon/git_icon.png")}
                      alt="GitHub"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* /Card two */}
          <div className="card">
            <h3 className="card__title">React Image finder</h3>
            <div className="card-wrp">
              <img
                className="card__img"
                src={require("../../img/project_4.png")}
                alt="finder img"
              />
              <div className="card__modal"></div>
              <div className="card__icon">
                <button className="icon__btn">
                  <a
                    href="https://andreysk8er.github.io/goit-react-hw-03-image-finder/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={require("../../img/icon/web.png")}
                      alt="web"
                    />
                  </a>
                </button>
                <button className="icon__btn ">
                  <a
                    href="https://github.com/Andreysk8er/goit-react-hw-03-image-finder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/icon/git_icon.png")}
                      alt="GitHub"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* /Card three */}
          <div className="card">
            <h3 className="card__title">React Bank account</h3>
            <div className="card-wrp">
              <img
                className="card__img"
                src={require("../../img/project_5.png")}
                alt="bank account"
              />
              <div className="card__modal"></div>
              <div className="card__icon">
                <button className="icon__btn">
                  <a
                    href="https://trusting-bardeen-7da496.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={require("../../img/icon/web.png")}
                      alt="web"
                    />
                  </a>
                </button>
                <button className="icon__btn ">
                  <a
                    href="https://github.com/Andreysk8er/goit-react-hw-05-bank-account"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../img/icon/git_icon.png")}
                      alt="GitHub"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* /Card four */}
          <a
            className="github"
            href="https://github.com/Andreysk8er"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more my GitHup pages{" "}
            <img src={require("../../img/pointer.png")} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
