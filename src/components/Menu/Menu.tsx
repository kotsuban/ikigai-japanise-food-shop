import React, { useState } from "react";

import "./Menu.scss";

import { Button } from "../index";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { changeCategory, changeSort } from "../../redux/sort/sortSlice";

import ArrowIcon from "../../assets/images/arrow.svg";

import { Route } from "react-router-dom";

const Menu = () => {
  const sortItems = [
    {
      name: "популярностi",
      type: "popular",
    },
    {
      name: "ціні",
      type: "price",
    },
    {
      name: "новизні",
      type: "new",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const dishes = useAppSelector((state) => state.dishes.entities);
  const currentSort = useAppSelector((state) => state.sort.sortBy.name);

  const sortRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const handleShowToogle = () => {
    setShowPopup(!showPopup);
  };

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setShowPopup(false);
    }
  };

  const handleChangeSort = (sort: any) => (e?: React.MouseEvent) => {
    dispatch(changeSort(sort));
    setShowPopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <Route path="/" exact>
      <div className="menu-container">
        <div className="menu-buttons" id="menu-scrollbar">
          <div className="menu-button">
            <Button
              color="#15171F"
              hoverColor="#F9F9F9"
              primary={true}
              height="48px"
              onClick={() => dispatch(changeCategory("Все"))}
            >
              <p className="menu-button-text">Все</p>
            </Button>
          </div>
          {dishes &&
            dishes.map((dish: any, index) => (
              <div className="menu-button" key={`${dish}_${index}`}>
                <Button
                  color="#15171F"
                  hoverColor="#F9F9F9"
                  primary={true}
                  height="48px"
                  onClick={() => dispatch(changeCategory(dish.dishName))}
                >
                  <p className="menu-button-text">{dish.dishName}</p>
                </Button>
              </div>
            ))}
        </div>
        <div className="menu-sort" ref={sortRef}>
          <div className="menu-sort-button" onClick={handleShowToogle}>
            <img
              className={`mr-1 ${
                showPopup ? `menu-sort-arrow--active` : `menu-sort-arrow`
              }`}
              src={ArrowIcon}
              alt=""
            />
            <p className="mr-2">Сортувати по:</p>
            <span>{currentSort}</span>
          </div>
          {showPopup && (
            <div className="menu-sort-panel">
              {sortItems.map((sortItem, index) => (
                <div
                  key={`${sortItem}_${index}`}
                  className="menu-sort-item"
                  onClick={handleChangeSort(sortItem)}
                >
                  {sortItem.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Route>
  );
};

export default Menu;
