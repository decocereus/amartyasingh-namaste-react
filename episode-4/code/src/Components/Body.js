import React, { useState, useEffect } from "react";
import { restaurantList } from "../../utils/mockData";
import { API_URL } from "../../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import "../index.css";

export default function Body() {
  const [filtered, setFiltered] = useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setFiltered(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterData = () => {
    setFiltered(
      restaurantList.filter((res) => {
        return res.info.avgRating >= 3.8;
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
        {console.log(filtered)}
        {filtered.map((resData) => {
          return <RestaurantCard key={resData.info.id} resData={resData} />;
        })}
      </div>
    </div>
  );
}
