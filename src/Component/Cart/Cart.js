import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { carts } = props;

  const name = carts.map((name) => name.name);
  const totalSelery = carts.reduce(
    (previous, carts) => previous + carts.selary,
    0
  );
  return (
    <div>
      <h1 className="cart-icon">
        add: <i class="fas fa-shopping-cart"></i>
      </h1>
      <p> Total Amount $:{totalSelery.toFixed(2)}</p>
      <p> {name}</p>
      <button className="hired-btn">Hired</button>
    </div>
  );
};

export default Cart;
