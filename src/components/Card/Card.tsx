import React from "react";

import "./Card.scss";

import { Button } from "../index";

import TopIcon from "../../assets/images/top-icon.svg";
import { ReactComponent as AddIcon } from "../../assets/images/add.svg";
import MinusIcon from "../../assets/images/plus.svg";
import PlusIcon from "../../assets/images/minus.svg";

import {
  addToBasket,
  plusCardItem,
  minusCardItem,
} from "../../redux/dishes/dishesSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

type Props = {
  dish: any;
  id: number;
  popular: boolean;
  isNew: boolean;
  picture: string;
  title: string;
  description: string;
  price: number;
};

const Card = ({
  dish,
  id,
  popular,
  isNew,
  picture,
  title,
  description,
  price,
}: Props) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.dishes.basket);

  return (
    <React.Fragment>
      <div className="card-container" key={id}>
        <div className="card-top">
          {isNew && (
            <div className="card-new-item">
              <Button
                color="#FF4344"
                hoverColor="#FF4344"
                primary={true}
                height="33px"
                defaultCursor={true}
              >
                <span>New</span>
              </Button>
            </div>
          )}
          {popular && (
            <div className="card-best-item">
              <img src={TopIcon} alt="" />
            </div>
          )}
        </div>
        <div className="card-info">
          <div className="card-image">
            <img src={picture} alt="" />
          </div>
          <div className="card-name">{title}</div>
          <div className="card-description">{description}</div>
        </div>
        <div className="card-bottom">
          <div className="card-price">{price} ₴</div>
          {items[id] && items[id].items.length >= 1 ? (
            <div className="basket-item__amount card-button">
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
              <span>{items[id].items.length}</span>
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
          ) : (
            <div className="card-button">
              <Button
                color="#FF4344"
                hoverColor="#FF4344"
                primary={false}
                height="40px"
                onClick={() => dispatch(addToBasket({ dishObj: dish }))}
              >
                <div className="card-button__inner">
                  <AddIcon className="mr-2 add-icon" />
                  <p>Додати</p>
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
