import React from "react";
import { restaurantList } from "../restaurantList";
import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import "../index.css";

export default function Body() {
  return (
    <div className="body">
      <Searchbar />
      <div className="restaurantCardContainer">
        {restaurantList.map((resData) => {
          return <RestaurantCard key={resData.data.id} resData={resData} />;
        })}
      </div>
    </div>
  );
}
