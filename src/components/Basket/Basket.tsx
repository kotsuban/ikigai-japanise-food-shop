import React from "react";

import "./Basket.scss";

import { BasketItem, Button, EmptyBasket } from "../index";
import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../../assets/images/shopping-cart2.svg";
import LeftArrowIcon from "../../assets/images/left-arrow.svg";
import TrashCanIcon from "../../assets/images/trash-can-icon.svg";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { clearBasket } from "../../redux/dishes/dishesSlice";

const Basket = () => {
  const { totalPrice, items } = useAppSelector((state) => state.dishes.basket);

  const dispatch = useAppDispatch();

  const SelectedDishes = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  return (
    <div className="basket">
      <div className="basket-top">
        <div className="basket-name">
          <CartIcon className="mr-2 basket-image" height="29" width="29" />
          Кошик
        </div>
        <div className="basket-clear" onClick={() => dispatch(clearBasket())}>
          <img src={TrashCanIcon} alt="" /> Очистити кошик
        </div>
      </div>
      <div className="basket-content">
        {Object.keys(items).length >= 1 ? (
          SelectedDishes.map((dish) => (
            <BasketItem
              key={dish.title}
              id={dish.id}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              picture={dish.picture}
              itemTotalCount={items[dish.id].items.length}
              itemTotalPrice={items[dish.id].totalPrice}
            />
          ))
        ) : (
          <EmptyBasket />
        )}
      </div>
      <div className="basket-statistics">
        <div className="basket-product-amount">
          Всього товарів: <strong>{SelectedDishes.length}</strong>
        </div>
        <div className="basket-product-price">
          Сумма замовлення: <span> {totalPrice} ₴</span>
        </div>
      </div>
      <div className="basket-buttons">
        <div className="basket-back-button">
          <Link to="/">
            <Button
              color="#FF4344"
              hoverColor="#FF43449D"
              primary={true}
              height="48px"
            >
              <span>
                <img className="mr-2" src={LeftArrowIcon} alt="" /> Вернутись
                назад
              </span>
            </Button>
          </Link>
        </div>
        <div className="basket-pay-button">
          <Button
            color="#FF4344"
            hoverColor="#FF43449D"
            primary={true}
            height="48px"
          >
            <strong>Оплатити зараз</strong>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
