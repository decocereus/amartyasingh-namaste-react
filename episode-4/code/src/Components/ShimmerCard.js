import React from "react";
import "../index.css";

export default function ShimmerCard() {
  return (
    <div className="shimmerContainer">
      <div className="shimmerImg"></div>
      <div className="shimmerInfoContainer">
        <div className="shimmerNameCusineContainer">
          <div className="shimmerName"></div>
          <div className="shimmerCusine"></div>
        </div>
        <div className="shimmerPriceContainer">
          <div className="shimmerPrice"></div>
          <div className="shimmerPrice"></div>
          <div className="shimmerPrice"></div>
        </div>
      </div>
    </div>
  );
}
