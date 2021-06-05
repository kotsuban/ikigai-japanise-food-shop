import React from "react";

import "./CardsContainer.scss";

import { Container } from "react-bootstrap";

import { Card, DishLoadingBlock } from "../index";
import { useAppSelector } from "../../hooks/reduxHooks";

const CardsContainer = () => {
  const dishes = useAppSelector((state) => state.dishes.entities);
  const dishesLoadStatus = useAppSelector((state) => state.dishes.status);
  const ActiveMenuItem = useAppSelector((state) => state.sort.category);
  const ActiveSort = useAppSelector((state) => state.sort.sortBy.type);
  const error = useAppSelector((state) => state.dishes.error);
  let content: any;
  let filteredContent: any;

  if (dishesLoadStatus === "loading") {
    content = (
      <Container fluid className="cards-container cards-container-loading">
        {
          (content = Array(12)
            .fill(0)
            .map((_, index) => <DishLoadingBlock key={index} />))
        }
      </Container>
    );
  } else if (dishesLoadStatus === "succeeded") {
    content = dishes.map((dish: any, index) => (
      <React.Fragment key={`${dish}_${index}`}>
        <div className="selected-menu-item">{dish.dishName}</div>
        <Container fluid className="cards-container">
          {dish.dishList
            .slice()
            .sort((a: any, b: any) => b[ActiveSort] - a[ActiveSort])
            .map((dish: any, index: number) => (
              <Card
                key={`${dish}_${index}`}
                dish={dish}
                id={dish.id}
                popular={dish.popular}
                isNew={dish.new}
                picture={dish.picture}
                title={dish.title}
                description={dish.description}
                price={dish.price}
              />
            ))}
        </Container>
      </React.Fragment>
    ));

    filteredContent = content.filter((e: any) => {
      return e.props.children[0].props.children
        .toLowerCase()
        .includes(ActiveMenuItem.toLowerCase());
    });
  } else if (dishesLoadStatus === "failed") {
    content = error;
  }

  return (
    <React.Fragment>
      {content && ActiveMenuItem === "Все" ? content : filteredContent}
    </React.Fragment>
  );
};

export default CardsContainer;
