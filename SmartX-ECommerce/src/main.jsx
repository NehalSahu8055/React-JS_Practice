import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../stylesheets/index.css";
import "../stylesheets/styles.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import AddAddress from "./pages/AddAddress.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/add-address" element={<AddAddress />} />
    </Route>,
  ),
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
