// console.log(React, ReactDOM) // React is just object not a new thing.. 🚀 do you know that in js everything is object. 

const root = ReactDOM.createRoot(document.getElementById("root")) // react-dom root
const h1 = React.createElement("h1", {}, "Hello World from react")


root.render(h1) 