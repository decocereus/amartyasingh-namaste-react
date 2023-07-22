import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import { MENU_API } from "../../utils/constants";

export default function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) {
    return <ShimmerCard />;
  }

  const { name, cuisines, avgRating, locality, costForTwoMessage } =
    resInfo.data?.cards[0]?.card.card.info;

  const { itemCards } =
    resInfo.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card;

  return (
    <div className="resInfoPageContainer">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{locality}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => {
          console.log(item);
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
}
