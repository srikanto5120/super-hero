import React from "react";

import "./Employe.css";

const Employe = (props) => {
  //   console.log(props.employe);
  const { name, img, selary, age, skill, country, exprience } = props.employe;
  return (
    <div className="employe">
      <div className="employe-img">
        <img src={img} alt="" />
      </div>
      <h4>Name:{name}</h4>
      <p>Skill: {skill}</p>
      <p>Exprience:{exprience} year</p>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
      <p>Avarage Salery :$ {selary} per month </p>
      <span>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
      </span>
      <br />
      <button
        onClick={() => props.handleButton(props.employe)}
        className="add-card-btn"
      >
        <i className="fas fa-shopping-cart"></i>
        add to cart
      </button>
    </div>
  );
};

export default Employe;
