import React, { useState } from "react";
import { SEARCH_BUTTON_URL } from "../../utils/constants";
import "../index.css";

export default function Searchbar(props) {
  const [searchText, setSearchText] = useState("");

  const onFilterClick = () => {
    props.filter();
  };

  const onRemoveFilterClick = () => {
    props.removeFilter();
  };

  const initiateSearch = () => {
    props.search(searchText);
  };

  return (
    <div className="searchFilterContainer">
      <div className="searchContainer">
        <div className="searchbar">
          <input
            type="text"
            className="searchInput"
            placeholder="Order from?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <img
            className="glass"
            src={SEARCH_BUTTON_URL}
            onClick={initiateSearch}
          />
        </div>
      </div>
      <div className="filterContainer">
        <button className="filterRestaurantsBtn" onClick={onFilterClick}>
          Top Rated Restaurants
        </button>
        <button className="removeFilters" onClick={onRemoveFilterClick}>
          Remove Filters
        </button>
      </div>
    </div>
  );
}
