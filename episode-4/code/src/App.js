import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

/**
 * <Header/>
 *  - logo
 *  - nav bar
 * <Body/>
 *    - search
 *    - restaurant cards
 * <Footer/>
 *    - Copy right
 *    - links
 */

const AppLayout = () => {
  return (
    <div className="globalContainer">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
