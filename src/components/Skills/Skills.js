import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div className="container">
      <div className="skills">
        <h3 className="skills__title">What technologies do I use?</h3>
        <div className="skills__img">
          <div className="skills_wrp">
            <img src={require("../../img/icon/html5.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/css3.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/js.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/bem.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img
              src={require("../../img/icon/bootstrap.png")}
              alt=""
              srcset=""
            />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/sass.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/gulp.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/webpack.png")} alt="" srcset="" />
          </div>
          <div className="skills_wrp">
            <img src={require("../../img/icon/git.png")} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
