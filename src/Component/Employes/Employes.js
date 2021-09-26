import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

import Employe from "../Employe/Employe";
import "./Employes.css";

const Employes = () => {
  const [employes, setEmployes] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("./employes.JSON")
      .then((res) => res.json())
      .then((data) => setEmployes(data));
  }, []);

  const handleButton = (employe) => {
    const addToCart = [...carts, employe];
    setCarts(addToCart);
  };

  return (
    <div className="employes">
      <div className="employes-container">
        {employes.map((employe) => (
          <Employe
            key={employe.key}
            handleButton={handleButton}
            employe={employe}
          ></Employe>
        ))}
      </div>
      <div className="cart-container">
        {<Cart key={carts.key} carts={carts}></Cart>}
      </div>
    </div>
  );
};

export default Employes;
