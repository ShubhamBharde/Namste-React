// console.log(React, ReactDOM) // React is just object not a new thing.. 🚀 do you know that in js everything is object.

const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom root
const nestedElement = [
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", { id: "child" }, "Heading 1")
  ),
  React.createElement(
    "div",
    { id: "uncle" },
    React.createElement("h2", { id: "cousin" }, "Heading 2")
  ),
];

root.render(nestedElement);
