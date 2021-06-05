import React from "react";

import "./Header.scss";

import { Route, Link } from "react-router-dom";
import { Button } from "../index";
import useWindowSize from "../../hooks/useWindowSize";
import { useAppSelector } from "../../hooks/reduxHooks";

import HeaderIcon from "../../assets/images/header-lamp.svg";
import DiscountIcon from "../../assets/images/discount-icon.svg";
import InfoIcon from "../../assets/images/info-icon.svg";
import CartIcon from "../../assets/images/shopping-cart2.svg";

const Header = () => {
  const { width } = useWindowSize();
  const { totalCount, totalPrice } = useAppSelector(
    (state) => state.dishes.basket
  );

  return (
    <React.Fragment>
      <header className="header">
        <Link to={"/"}>
          <div className="header-logo">
            生きがい <img src={HeaderIcon} alt="" />
            <span>ikigai japanise food</span>
          </div>
        </Link>
        <div className="header-menu">
          <Route path={width <= 586 ? "/basket" : "/"}>
            <div className="header-discount-button">
              <Button
                color="#FF4344"
                hoverColor="#FF43449D"
                primary={true}
                height="48px"
              >
                <img className="header-icon" src={DiscountIcon} alt="" />
              </Button>
            </div>
            <Link to={"/info"}>
              <div className="header-info-button">
                <Button
                  color="#FF4344"
                  hoverColor="#FF43449D"
                  primary={true}
                  height="48px"
                >
                  <img className="header-icon" src={InfoIcon} alt="" />
                </Button>
              </div>
            </Link>
          </Route>
          <Route path="/" exact>
            <div className="header-order-status">
              <Link to="/basket">
                <Button
                  color="#FF4344"
                  hoverColor="#FF43449D"
                  primary={true}
                  height="48px"
                >
                  <div className="header-order-status__inner">
                    <div className="header-order-status__price">
                      {totalPrice} ₴
                    </div>
                    <div className="header-order-status__line"></div>
                    <div className="header-order-status__amount">
                      <img className="mr-1" src={CartIcon} alt="" />{" "}
                      <p>{totalCount}</p>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
          </Route>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
