import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom root

const App = () => {
  return <h1> App Component </h1>;
};

root.render(<App />); // render() take object which is return by ReactElement & convert html element & putting it dom.
