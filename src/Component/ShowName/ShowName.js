import React from "react";
import "./ShowName.css";

const ShowName = (props) => {
  const { cartName } = props;

  return (
    <div className="cart">
      <img className="cart-img" src={cartName.img} alt="" />
      <p> {cartName.name}</p>
    </div>
  );
};

export default ShowName;
