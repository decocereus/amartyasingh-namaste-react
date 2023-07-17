import React, { useState } from "react";
import { restaurantList } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import "../index.css";
import { useState } from "react";

export default function Body() {
  const [filtered, setFiltered] = useState(restaurantList);

  const filterData = () => {
    setFiltered(
      restaurantList.filter((res) => {
        return res.data.avgRating >= 3.8;
      })
    );
  };

  const removeFilterData = () => {
    setFiltered(restaurantList);
  };

  return (
    <div className="body">
      <Searchbar filter={filterData} removeFilter={removeFilterData} />
      <div className="restaurantCardContainer">
        {filtered.map((resData) => {
          return <RestaurantCard key={resData.data.id} resData={resData} />;
        })}
      </div>
    </div>
  );
}
