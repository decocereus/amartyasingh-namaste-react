import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import ShimmerCard from "./ShimmerCard";
import "../index.css";

export default function Body() {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    const data =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setCardData(data);
    setFilteredData(data);
  };

  const filterData = () => {
    const filteredCardData = cardData.filter((res) => {
      return res.info.avgRating >= 3.8;
    });
    setFilteredData(filteredCardData);
  };

  const removeFilterData = () => {
    setFilteredData(cardData);
  };

  const searchRestaurants = (searchText) => {
    const filteredCardData = cardData.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(filteredCardData);
  };

  return (
    <div className="body">
      <Searchbar
        filter={filterData}
        removeFilter={removeFilterData}
        search={searchRestaurants}
      />
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
