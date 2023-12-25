import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ErrorElement from "./components/ErrorElement";
import RestroMenu from "./components/RestroMenu";

const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom root

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId", // make dynamic route path using ":"
        element: <RestroMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouting} />); // render() take object which is return by ReactElement & convert html element & putting it to original DOM.
