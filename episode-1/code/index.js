const headingReact = React.createElement(
  "h1",
  { id: "reactHeading" },
  "Hello World from React"
);

// This is how you create nested elements in react
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ])
);

const rootReact = ReactDOM.createRoot(document.getElementById("reactRoot"));
rootReact.render([headingReact, parent]);
