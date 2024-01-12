import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { Header, Footer } from "./layout";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const API = "https://dummyjson.com/products/";
  const cart = useSelector((state) => state.cart);
  const { data } = useFetch(API);

  return (
    <>
      <Header cart={cart} />
      <Outlet cart={cart} data={data} />
      <Footer />
    </>
  );
}

export default RootLayout;
