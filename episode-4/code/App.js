import React from "react";
import ReactDOM from "react-dom";

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
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJTmswUb5uIEzpJohlELVyfns0JE-VELMfhmgplglxOxTDW_1aHZxYzY67HdIUgG7Zuk&usqp=CAU"
          className="logo"
        />
      </div>
      <div className="navContainer">
        <ul className="navItemsList">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="cardContainer">
      <img src={props.image} className="restaurantImg" />
      <hr class="solid"> </hr>
      <div className="restaurantInfoContainer">
        <div className="nameCusineContainer">
          <h3 className="name">{props.name}</h3>
          <h4 className="cusine">{props.cusine}</h4>
        </div>
        <div className="priceContainer">
          <h4 className="price">500</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchContainer">
        <div className="searchbar">
          <input
            type="text"
            className="searchInput"
            placeholder="Order from?"
          />
          <img
            className="glass"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX09PQ7OzsvLy/39/f6+vosLCw1NTXx8fEyMjL8/Pw4ODgqKipmZmZycnJpaWkmJibi4uK0tLTMzMzr6+vFxcWampqJiYmTk5O6urqoqKhOTk6zs7OPj48+Pj53d3dbW1vZ2dlKSkqioqJ9fX3j4+Nr1qbrAAAF9klEQVR4nO2ce3ejLBDGlQEENGq8JJqrbfL9P+MrkGyTfdtuvLSFdH5/tHu2pz3zOPAMIJMgQBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCZAABq6f/108HMDlAJXdW09W63q9umyKmkT6QSJBR1EgrCCBFCkP4736dt0av+6dDmAGjQHOKYcBXeojjJ+Krof+o5QPM6jHn4PiJ7aUuvR2uvb0XITfKU4lyp2/9gqi79zSMt14pctXDB2H5zTJLkuFExE9e8KrJvI0/TKJsXdpUX83TddOcyCiCIyrxb7hLC+DWPx0L+dLAjgGjF1EUBOTVlcFMFdWEMzttFTK75rf2rkLTbkIu+fVu+V+KBQr4WF40s8W2kyorbMUjCLXzolkCjmglrq/vOK8Oh21jZ4beOPg9clic7mJUoPJJI28wm8Nj900JAVi/CSqy8kSi3ViBbPTS56HlBbLH0JYu0ik3A8fbBgCFYm7Ki9p0XdgOdWYIqUj1e5GhrHgrflD5IjDbcChwy5C4DWyw8KP1yZSZVPNA25KuRGLfOS6SNGW9sOzRSuTJzMXN9KkK50ZOQrIa7IqS6aPDEcT+lxhX5MRr+q5Dv9cNhS6clQm7WJ2LUUKONfjpqM+LpfB/U2AxZj7MLOOhxylqHkwi5FqjCkVmATrmeRFqTSUmQK5PExuEk9vnr116j/R5yvVjgqbMFA0wtnDKP5Mkk0dmaKA86BWTC2hIK/YzIq6vDFHR4/DQlAfJF6ao/W0jzYhMQN1MUXrzq7OYwtdHxSRsgKLLJT+nrkAnXRjjtj4C2GrF2cyKCrhVTg6OpfkyJkzmEzpbracGZoa5CNxVWZIZaBmb5nZUzBTUrNrb9RBu0huzmPpi2enxtJj59OBszrZxUaGbQmL3vHVE8w2z+GuhOzLEciYxfLR1WODW0yBxlPHqY/K3Qda9QPXUOn38ezuOlubteauuhyp+3HkKh1zTxxNjo0qxpnDyMsocsUw90rV+NP+r5Uqg+sxa7iQrNFmzhpkJpNz7T/og5CSG1i+XwYqYhmbT0BvP+2E0r1RvEbPJyRO7MHt/JzVMPNee5k+aQOSdwdRpeD+XjCRURKub0uxl7UEYmnNQYswr5xFXDFwL6PDcUo8u1PerhB2cF9m7KjNePvW0gzQtEV53UUJr7v2zkobBd9/HjzEHNCq11EsVpZBKP3PXXhwGU9rbBqDt49JU5n8LrTFQvIxY20JkbqczlWaiJzEgTi8G/CKW5LTZ6hH8bUJjLosOLIpgrmEq5f3dPGrPp1yXDcnG99OW0zVyAxGQxHnSzTe7MdTgx8ibO9wKR8dMwe304WoBVbNsSFl50JfRrLytx9WC4UC6urSckDXyQSAsrkaX5I7PqT2uGkbjwovGCVrZ7S+ybf6YRgld+29vmi8Rib6JW7NB92kYJsjiy8A5fJHabSy+MWuUfagTZHYhNoOC+Sezdw9pjH/upeK/pFyRUqbDPQWW7xe1c9MJuQLbZJS8ifqkLeGvhNj3dUO3Ca3+eUI2E9Eaiu3f37pBdcunPCxXJRFo3xTnS5MVyncSxuPyQs1NJ+6zdZjHxoi4GQJcb9qcllhMWZ70s0X99ayHt9R0rM4YhupXoR13sDSdqN+yjPmejLz42Vy33Ev2wm0BrbFJG3hfJGT9UwduiwFOJAYXuNWGxuGvIV5zEYtHm99PNV4n6QwfOzToJs34CauIs26d1Vf6/uRSC1LuicQG0mrKrmu122VRdBB+0zgIk/hWNG8ynm8Dnn2xyVxc9KRrDuK+LvhSNQXhrN4+DEp+Bv4rGU0q8Kxpe1cWH8XEzNQwvN1PD8HMzNYjf4Kgo8QnweDP1KL5vph4BN1NPwG+wG5T4BOBm6in4fZupn47nC/jLbp5eotOXbEdzK3HKXXKHuZHoalPNVN7qopvdezNwrYuZFxf8xgGLmJBnFqi7atb1vz/21Wv0G8ifjgFBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEATxiv8Ang1BCnZ212wAAAAASUVORK5CYII="
          />
        </div>
      </div>
      <div className="restaurantCardContainer">
        <RestaurantCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIAiB6zRQaKQLN2mME7YyAGe6pEmuIIF90g&usqp=CAU"
          name="KFC"
          cusine="Chicken"
        />
        <RestaurantCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIAiB6zRQaKQLN2mME7YyAGe6pEmuIIF90g&usqp=CAU"
          name="KFC"
          cusine="Chicken"
        />
        <RestaurantCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIAiB6zRQaKQLN2mME7YyAGe6pEmuIIF90g&usqp=CAU"
          name="KFC"
          cusine="Chicken"
        />
        <RestaurantCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIAiB6zRQaKQLN2mME7YyAGe6pEmuIIF90g&usqp=CAU"
          name="KFC"
          cusine="Chicken"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
