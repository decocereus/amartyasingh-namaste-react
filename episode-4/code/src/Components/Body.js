import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import ShimmerCard from "./ShimmerCard";
import "../index.css";

export default function Body() {
  const [filteredData, setFilteredData] = useState([]);
  let unfilteredData;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setFilteredData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterData = () => {
    unfilteredData = filteredData;
    setFilteredData(
      filteredData.filter((res) => {
        return res.info.avgRating >= 3.8;
      })
    );
  };

  const removeFilterData = () => {
    setFilteredData(filteredData);
  };

  return (
    <div className="body">
      <Searchbar filter={filterData} removeFilter={removeFilterData} />
      <div className="restaurantCardContainer">
        {filteredData.length === 0 ? (
          <>
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </>
        ) : (
          filteredData.map((resData) => {
            return <RestaurantCard key={resData.info.id} resData={resData} />;
          })
        )}
      </div>
    </div>
  );
}
