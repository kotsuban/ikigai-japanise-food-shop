import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./scss/global-styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  CardsContainer,
  Menu,
  Header,
  Footer,
  Basket,
  Info,
} from "./components/index";

import { fetchDishes } from "./redux/dishes/dishesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";

function App() {
  const dispatch = useAppDispatch();
  const dishesLoadStatus = useAppSelector((state) => state.dishes.status);

  React.useEffect(() => {
    if (dishesLoadStatus === "idle") {
      dispatch(fetchDishes());
    }
  }, [dispatch, dishesLoadStatus]);

  return (
    <React.Fragment>
      <Router>
        <div className="main-container">
          <Header />
          <Menu />
          <Route path="/" exact>
            <CardsContainer />
          </Route>
          <Route path="/info" exact>
            <Info />
          </Route>
          <Route path="/basket" exact>
            <Basket />
          </Route>
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
