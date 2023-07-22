import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { CDN_URL } from "../../utils/constants.js";

export default function RestaurantCard(props) {
  const resData = props.resData;
  const navigate = useNavigate();
  const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating, id } =
    resData?.info;
  return (
    <div
      className="cardContainer"
      onClick={() => {
        const url = "/restaurant/" + id;
        navigate(url);
      }}
    >
      <img src={CDN_URL + cloudinaryImageId} className="restaurantImg" />

      <div className="restaurantInfoContainer">
        <div className="nameCusineContainer">
          <h3 className="name">{name}</h3>
          <h4 className="cusine">{cuisines.slice(0, 3).join(", ")}</h4>
        </div>
        <div className="priceContainer">
          <h4 className="price">{costForTwo}</h4>
          <h4 className="price">Delivered in {sla.deliveryTime} minutes</h4>
          <h4 className="price">{avgRating} stars</h4>
        </div>
      </div>
    </div>
  );
}
