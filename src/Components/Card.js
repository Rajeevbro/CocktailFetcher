import React from "react";
import { NavLink } from "react-router-dom";
const Card = (data) => {
  let { id, img, info, glassType, name } = data.props;
  return (
    <>
      <div className="card-container">
        <div className="image-section">
          <img src={img} alt="photo" />
        </div>
        <div className="info-section">
          <div className="info">{info}</div>
          <div className="name">{name}</div>
          <div className="glassType">{glassType}</div>
        </div>
        <button className="btn">
          <NavLink to={`singleProducts/${id}`}>Details</NavLink>
        </button>
      </div>
    </>
  );
};

export default Card;

// const { idDrink, strAlcoholic, strGlass, strDrinkThumb } = data;
