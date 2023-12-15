import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom root

// jsx syntax use for readabilty & easy to use
const jsxNestedElement = (
  <>
    <div id="parent">
      <h1 id="child"> Heading 1</h1>
    </div>
    <div id="uncle">
      <h2 id="cousin">Heading 2 </h2>
    </div>
  </>
);

console.log(jsxNestedElement); // it gives object... behind the scene, babel takes jsx & compile to ReactElement which is object.

root.render(jsxNestedElement); // render() take object which is return by ReactElement & convert html element & putting it dom.
