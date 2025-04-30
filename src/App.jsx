import { useState } from "react";

import { PageNotFound } from "components/commons";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes";

import "./App.css";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import CartItemsContext from "./contexts/CartItemsContext";

// eslint-disable-next-line import/extensions

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemsContext.Provider value={[cartItems, setCartItems]}>
      <Switch>
        <Route exact component={Product} path={routes.products.show} />
        <Route exact component={ProductList} path={routes.products.index} />
        <Redirect exact from={routes.root} to={routes.products.index} />
        <Route exact component={PageNotFound} path="*" />
      </Switch>
    </CartItemsContext.Provider>
  );
};
export default App;
