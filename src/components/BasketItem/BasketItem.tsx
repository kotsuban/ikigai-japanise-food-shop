import React from "react";

import "./BasketItem.scss";

import { Button } from "../index";

import MinusIcon from "../../assets/images/plus.svg";
import PlusIcon from "../../assets/images/minus.svg";
import CancelIcon from "../../assets/images/cross.svg";

import {
  deleteBasketItem,
  minusCardItem,
  plusCardItem,
} from "../../redux/dishes/dishesSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

interface PropTypes {
  id: number;
  picture: string;
  title: string;
  description: string;
  price: number;
  itemTotalCount: number;
  itemTotalPrice: number;
}

const BasketItem = ({
  id,
  title,
  description,
  price,
  picture,
  itemTotalCount,
  itemTotalPrice,
}: PropTypes) => {
  const dispatch = useAppDispatch();

  return (
    <div className="basket-item">
      <div className="basket-item__info">
        <div className="basket-item__photo">
          <img src={picture} alt="" />
        </div>
        <div className="basket-item__text">
          <p className="basket-item__name">{title}</p>
          <p className="basket-item__description">{description}</p>
        </div>
      </div>
      <div className="basket-item__statistics">
        <div className="basket-item__amount">
          <Button
            color="#FF4344"
            hoverColor="#FF434424"
            primary={false}
            height="32px"
            borderWidth={2}
            onClick={() => dispatch(plusCardItem({ dishId: id }))}
          >
            <img src={MinusIcon} alt="" />
          </Button>
          <span>{itemTotalCount}</span>
          <Button
            color="#FF4344"
            hoverColor="#FF434424"
            primary={false}
            height="32px"
            borderWidth={2}
            onClick={() => dispatch(minusCardItem({ dishId: id }))}
          >
            <img src={PlusIcon} alt="" />
          </Button>
        </div>
        <div className="basket-item__price">{itemTotalPrice} ₴</div>
        <div className="basket-item__delete">
          <Button
            color="#D7D7D7"
            hoverColor="#D7D7D718"
            primary={false}
            height="32px"
            borderWidth={2}
            onClick={() => dispatch(deleteBasketItem({ dishId: id }))}
          >
            <img src={CancelIcon} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
