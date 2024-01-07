import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <main class="justify-evenly">
      <h2 className="mb-3 text-2xl font-bold text-slate-800">Shopping Cart</h2>
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
            src="https://media.giphy.com/media/8PA8Ew3nw97yg/giphy.gif"
            width="300"
            alt=""
          />
          <span>Oops! Empty Cart. Add Some Items</span>
        </div>
      )}
      <div className="address-wrap ">
        <h3 className="py-3 text-lg text-slate-800">
          Select a delivery address
        </h3>
        <div className="select-address mb-10">
          <div className="border-purple/40 bg-purple/10 mb-2 flex rounded-md border px-4  py-2">
            <label className=" flex items-center gap-2 text-slate-800">
              <input type="radio" name="addressSelect" />
              <span className="font-bold">Nehal Sahu</span>
              <span className="text-sm">
                Address ward no 1, g. t. road Ajuha kaushambi, AJHUWA, UTTAR
                PRADESH, 212217, India
              </span>
            </label>
          </div>
          <div className="border-purple/40 bg-purple/10 flex rounded-md border px-4  py-2">
            <label className=" flex items-center gap-2 text-slate-800">
              <input type="radio" name="addressSelect" />
              <span className="font-bold">Nehal Sahu</span>
              <span className="mb-4 text-sm">
                Address ward no 1, g. t. road Ajuha kaushambi, AJHUWA, UTTAR
                PRADESH, 212217, India
              </span>
            </label>
          </div>
          <button className="add-address-btn hover:text-purple group flex cursor-pointer  items-center gap-1 px-4 pt-2 text-sm text-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                className="group-hover:fill-purple transition"
                fill="#888888"
                d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v3H8q-.425 0-.712.288T7 12q0 .425.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
              />
            </svg>
            <span>Add Address</span>
          </button>
        </div>
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
          <button
            className="proceed-btn"
            onClick={() => {
              // dispatch(addToCart({ images, title, price, rating }))
            }}
          >
            Proceed To Buy
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
