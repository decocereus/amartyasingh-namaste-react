/**
 * * React.createElement returns an *object*
 * * the render function changes that object into the specified type of tag which browser understands
 * * createElement takes in three arguments, type, attributes and children. These three together make the props.
 */
const headingReact = React.createElement(
  "h1",
  { id: "reactHeading" },
  "Hello World from React"
);
/**
 * * created a new root div for react-dom because it was replacing the contents of the existing root.
 * * To see all three methods a new div element was required.
 */

// This is how you create nested elements in react
const parent = React.createElement(
  "div",
  { id: "parent" },
  /**
   * * If we want to pass in multiple children then we need to pass the children inside a list [child1, child2....]
   */
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ])
);

const rootReact = ReactDOM.createRoot(document.getElementById("reactRoot"));
rootReact.render([headingReact, parent]);
