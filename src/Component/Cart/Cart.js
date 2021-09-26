import React from "react";
import ShowName from "../ShowName/ShowName";
import "./Cart.css";

const Cart = (props) => {
  const { carts } = props;

  const totalSelery = carts.reduce(
    (previous, carts) => previous + carts.selary,
    0
  );
  return (
    <div>
      <h1 className="cart-icon">
        Cart: <i className="fas fa-shopping-cart"></i>
      </h1>
      <p> Total Amount $:{totalSelery.toFixed(2)}</p>
      {carts.map((cartName) => (
        <ShowName key={cartName.key} cartName={cartName}></ShowName>
      ))}
      <button className="hired-btn">Hired</button>
    </div>
  );
};

export default Cart;
