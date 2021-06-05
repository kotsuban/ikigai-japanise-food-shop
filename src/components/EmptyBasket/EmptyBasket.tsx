import React from "react";
import "./EmptyBasket.scss";

import SakuraSVG from "../../assets/images/sakura.svg";

import { Link } from "react-router-dom";

const EmptyBasket = () => {
  return (
    <div className="empty-basket-container">
      <object
        className="empty-basket-sakura"
        style={{ width: "450px", height: "450px" }}
        type="image/svg+xml"
        data={SakuraSVG}
      >
        svg-animation
      </object>
      <div className="empty-basket-text">
        <h2 className="">
          Кошик порожній <span>:(</span>
        </h2>
        <p className="">
          Щоб замовити щось натисніть{" "}
          <Link to="/" className="empty-basket-button">
            сюди
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmptyBasket;
