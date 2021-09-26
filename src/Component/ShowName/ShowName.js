import React from "react";
import "./ShowName.css";

const ShowName = (props) => {
  const { cartName } = props;

  return (
    <div className="cart">
      <img className="cart-img" src={cartName.img} alt="" />
      <div>
        <p> {cartName.name}</p>
        <p>
          <small>{cartName.skill}</small>
        </p>
        <i className="far cheak fa-check-circle"></i>
      </div>
    </div>
  );
};

export default ShowName;
