import { PageNotFound } from "components/commons";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes";

import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

// eslint-disable-next-line import/extensions

const App = () => (
  <Switch>
    <Route exact component={Cart} path={routes.cart} />
    <Route exact component={Checkout} path={routes.checkout} />
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);
export default App;
