import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";

const RestroMenu = lazy(() => import("./components/RestroMenu"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", // make dynamic route path using ":"
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestroMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouting} />); // render() take object which is return by ReactElement & convert html element & putting it to original DOM.
