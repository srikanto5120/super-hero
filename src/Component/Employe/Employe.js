import React from "react";

import "./Employe.css";

const Employe = (props) => {
  //   console.log(props.employe);
  const { name, img, selary, age, skill, country, exprience } = props.employe;
  return (
    <div className="employe">
      <img src={img} alt="" />
      <h3>Name:{name}</h3>
      <h3>Skill: {skill}</h3>
      <p>Exprience:{exprience} year</p>
      <h5>Age:{age}</h5>
      <h5>Country:{country}</h5>
      <h4>Avarage Salery :$ {selary} per month </h4>
      <span>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-linkedin"></i>
      </span>
      <br />
      <button
        onClick={() => props.handleButton(props.employe)}
        className="add-card-btn"
      >
        <i class="fas fa-shopping-cart"></i>
        add to cart
      </button>
    </div>
  );
};

export default Employe;
