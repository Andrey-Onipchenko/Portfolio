import React from "react";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import Quote from "../Quote/Quote";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <Profile />
      <Skills />
      <Quote />
      <Portfolio />
    </main>
  );
}

export default Main;
