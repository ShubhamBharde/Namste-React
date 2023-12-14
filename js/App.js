import React from "react";
import  ReactDOM  from "react-dom/client";
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

console.log(nestedElement); // it gives object not a html element // that object call virtual dom..

root.render(nestedElement); // render() take object which is return by ReactElement & convert html element & putting it dom.

// Note :-
// ReactElement gives/returns object not html Element.
// & ReactDOM render() takes the object and convert to html element and put in to DOM.

// React methods:-
// React.createElement(tagName, attributeObjects, children)

// ReactDOM methods:-
// ReactDOM.createRoot(document.querySelector("#root")) // it create react root for dom
// .render() method takes object from ReactElement and convert html element and putting it dom.

// Remember Permanent .. root.render() will replace the old to new one dom.
