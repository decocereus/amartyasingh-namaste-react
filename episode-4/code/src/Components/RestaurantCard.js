import React from "react";
import "../index.css";
import { CDN_URL } from "../../utils/constants.js";

export default function RestaurantCard(props) {
  const resData = props.resData;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData?.data;
  return (
    <div className="cardContainer">
      <img src={CDN_URL + cloudinaryImageId} className="restaurantImg" />

      <div className="restaurantInfoContainer">
        <div className="nameCusineContainer">
          <h3 className="name">{name}</h3>
          <h4 className="cusine">{cuisines.join(", ")}</h4>
        </div>
        <div className="priceContainer">
          <h4 className="price">₹{costForTwo / 100} FOR TWO</h4>
          <h4 className="price">Delivered in {deliveryTime} minutes</h4>
          <h4 className="price">{avgRating} stars</h4>
        </div>
      </div>
    </div>
  );
}
