import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import ShimmerCard from "./ShimmerCard";
import "../index.css";

export default function Body() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    setCardData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterData = () => {
    const filteredCardData = cardData.filter((res) => {
      return res.info.avgRating >= 3.8;
    });
    setCardData(filteredCardData);
  };

  const removeFilterData = () => {
    setCardData(cardData);
  };

  return (
    <div className="body">
      <Searchbar filter={filterData} removeFilter={removeFilterData} />
      <div className="restaurantCardContainer">
        {cardData.length === 0 ? (
          <>
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </>
        ) : (
          cardData.map((resData) => {
            return <RestaurantCard key={resData.info.id} resData={resData} />;
          })
        )}
      </div>
    </div>
  );
}
