import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "heading" }, "I am a react heading")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
