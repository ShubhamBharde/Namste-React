import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom root

const App = () => {
  // console.log(Body);
  // console.log(<Body />);
  // console.log(<Body></Body>);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<App />); // render() take object which is return by ReactElement & convert html element & putting it dom.
