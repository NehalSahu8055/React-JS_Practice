import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddressOrder() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <main>
      {/* Address  */}
      <div className="address-wrap mt-2">
        <h3 className="py-3 text-lg text-slate-800">
          Select a delivery address
        </h3>
        <div className="select-address mb-10">
          <div className="border-purple/40 bg-purple/10 mb-2 flex rounded-md border px-4  py-2">
            <div className=" flex items-center gap-2 text-slate-800">
              <input type="radio" name="addressSelect" />
              <span className="font-bold">Nehal Sahu</span>
              <span className="text-sm">
                Address ward no 1, g. t. road Ajuha kaushambi, AJHUWA, UTTAR
                PRADESH, 212217, India
              </span>
            </div>
          </div>

          <button className="add-address-btn hover:text-purple group flex cursor-pointer  items-center gap-1 px-4 text-sm text-slate-700">
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
      </div>

      {/* Payment */}
      <div className="payment-wrap mt-2">
        <h3 className="py-3 text-lg text-slate-800">Payment Method</h3>
        <div className="select-address mb-10">
          <label>
            <div className="border-purple/40 bg-purple/10 mb-2 flex rounded-md border px-4  py-2">
              <div className=" flex items-center gap-2 text-slate-800">
                <input type="radio" name="paymentSelect" />
                <span className="text-sm">UPI</span>
              </div>
            </div>
          </label>
          <label>
            <div className="border-purple/40 bg-purple/10 mb-2 flex rounded-md border px-4  py-2">
              <div className=" flex items-center gap-2 text-slate-800">
                <input type="radio" name="paymentSelect" />
                <span className="text-sm">Net banking</span>
              </div>
            </div>
          </label>
          <label>
            <div className="border-purple/40 bg-purple/10 mb-2 flex rounded-md border px-4  py-2">
              <div className=" flex items-center gap-2 text-slate-800">
                <input type="radio" name="paymentSelect" />
                <span className="text-sm">
                  Cash on delivery / Pay on delivery
                </span>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/*Place Order */}
      <div className="place-order-wrap mt-2">
        <h3 className="py-3 text-lg text-slate-800">Order Summary</h3>
        <span>
          Subtotal ({cart.length}) ₹
          {cart && Array.isArray(cart)
            ? cart.reduce((acc, product) => acc + product.price, 0)
            : 0}
        </span>
      </div>
      <hr className="mb-4 border-gray-300" />
      <div className="subtotal-wrap">
        <span>
          Order Total :{" "}
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
          Place Order
        </button>
      </div>
    </main>
  );
}
