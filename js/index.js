const root = document.querySelector("#root");
const h1 = document.createElement("h1"); // createElement() used for create html element.
h1.innerHTML = "Hello World from Javascript"; // .innerHTML property will replace things to new one.

root.appendChild(h1); // appendChild() will append/add child in parent but not will replace , remains also present.
