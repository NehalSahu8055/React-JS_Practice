import React from "react";

function ConfirmOrder() {
  return (
    <main>
      <span className="mx-auto "> ✅ Your Order Confirmed, Thank You!</span>

      <img
        className="mx-auto"
        src="/order-success.svg"
        width="500"
        alt="Illustration of a girl pointing to a big phone having order confirmed"
      />
    </main>
  );
}

export default ConfirmOrder;
