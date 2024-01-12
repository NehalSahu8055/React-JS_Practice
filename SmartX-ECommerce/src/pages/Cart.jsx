import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { NavLink } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <main className="justify-evenly">
      <h2 className="mb-10 text-2xl font-bold text-slate-800">Shopping Cart</h2>
      {cart.length ? (
        <div className="grid grid-cols-2 gap-1 tab:grid-cols-7 laptop:grid-cols-8">
          {cart.map((product) => {
            const { id, image, title, price } = product || {};

            return (
              <article key={nanoid() + id} className="card cartCard">
                <div>
                  <img src={image[0]} alt={title} width="200" />
                </div>
                <div className="detail">
                  <h1 className="px-2 text-sm font-bold">{title}</h1>
                  <hr className="" />
                  <div className="about">
                    <span className="price">₹ {price}</span>
                    <button
                      className="remove-from-cart-btn"
                      onClick={() => dispatch(removeFromCart(id))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#888888"
                          d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"
                        />
                      </svg>
                      {/* Delete */}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="msg-empty-cart">
          <img
            className="img-empty-cart"
            src="empty-cart.svg"
            width="200"
            alt=""
          />
          <span>Oops! Empty Cart. Add Some Items</span>
        </div>
      )}

      <hr className="mb-4 border-gray-300" />
      <div className="subtotal-wrap">
        <span>
          Subtotal ({cart.length}):{" "}
          <span className="subtotal">
            ₹
            {cart && Array.isArray(cart)
              ? cart.reduce((acc, product) => acc + product.price, 0)
              : 0}
          </span>
        </span>
        <NavLink
          to="/checkout"
          className="proceed-btn"
          onClick={() => {
            // dispatch(addToCart({ images, title, price, rating }))
          }}
        >
          Proceed To Buy
        </NavLink>
      </div>
    </main>
  );
}

export default Cart;
