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
      <div className="cart-heading">
        <h5>Your Company Managment Team</h5>
        <p className="selected-employe"> Employes:{carts.length}</p>

        <p> Total Amount $:{totalSelery.toFixed(2)}</p>
      </div>
      {carts.map((cartName) => (
        <ShowName key={cartName.key} cartName={cartName}></ShowName>
      ))}
      <button className="hired-btn">Hired</button>
    </div>
  );
};

export default Cart;
