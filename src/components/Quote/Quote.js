import React from "react";
import "./quote.css";

function Quote() {
  return (
    <div className="quote__wrap">
      <div className="container">
        <blockquote className="blockquote">
          <p className="quote">
            patience, persistence and perspiration make an unbeatable
            combination for success.
          </p>
          <footer className="quote__footer">Napoleon Hill</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Quote;
