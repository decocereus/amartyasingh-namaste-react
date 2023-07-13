import React from "react";
import ReactDOM from "react-dom/client";
import google from "./assets/google.png";
import glass from "./assets/glass.svg";
import user from "./assets/user.png";

const TitleExample = () => (
  <h1 className="title">Hi from JSX courtsey Babel</h1>
);

// Component inside another Component is called Component composition.
const HeadingComponent = () => (
  <>
    <TitleExample />
    {TitleExample()}
    <TitleExample></TitleExample>
    <div className="container">
      <TitleExample />
      <h2>This worked</h2>
    </div>
  </>
);

/**
 * * These three are equivalent
 * * <TitleExample />
 * * {TitleExample()}
 * * <TitleExample></TitleExample>
 */

// Assignment

const title = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "H1"),
  React.createElement("h2", {}, "H2"),
  React.createElement("h3", {}, "H3"),
]);

const TitleJSX = (props) => (
  <div className="title">
    {title}
    <HeadingComponent />
    <TitleExample />
    <h1>{props.h1}</h1>
    <h2>{props.h2}</h2>
    <h3>{props.h3}</h3>
  </div>
);

const SearchBar = () => {
  return (
    <div className="searchContainer">
      <img src={google} alt="logo" className="logo" />
      <div className="search">
        <input type="text" placeholder="Search.." className="searchbox" />
        <img src={glass} className="glass" />
      </div>
      <img src={user} className="user" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SearchBar />);
