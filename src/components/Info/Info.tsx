import React from "react";

import "./info.scss";

import { ReactComponent as ReactLogo } from "../../assets/images/github.svg";

const Info = () => {
  return (
    <div className="info">
      <h2 className="info-title">
        <span className="info-shop-title">ikigai japanise food</span> - online
        food shop, created with <span className="info-react">React</span> &{" "}
        <span className="info-redux">Redux</span>
      </h2>
      <p className="info-description">
        You can check my other projects here:{" "}
        <a href="https://github.com/kotsuban">
          <ReactLogo className="ml-3" width="22" height="22" fill="#ff4344" />{" "}
          Github
        </a>
      </p>
    </div>
  );
};

export default Info;
