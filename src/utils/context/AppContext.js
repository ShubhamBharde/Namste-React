import { createContext } from "react";

const AppContext = createContext({
  loggedInUser: "Default user",
  myAge: 18,
});



export default AppContext;
