import React from "react";
import "../index.css";

export default function RestaurantCard(props) {
  const resData = props.resData;
  const { cloudinaryImageId, name, cuisines, costForTwo, deliveryTime } =
    resData?.data;
  return (
    <div className="cardContainer">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        className="restaurantImg"
      />

      <div className="restaurantInfoContainer">
        <div className="nameCusineContainer">
          <h3 className="name">{name}</h3>
          <h4 className="cusine">{cuisines.join(", ")}</h4>
        </div>
        <div className="priceContainer">
          <h4 className="price">₹{costForTwo / 100} FOR TWO</h4>
          <h4 className="price">Delivered in {deliveryTime} minutes</h4>
        </div>
      </div>
    </div>
  );
}
