import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";

const useRestroMenu = () => {
  const { resId } = useParams(); // dynamic param gives in form of object

  const [restroMenu, setRestroMenu] = useState(null);

  useEffect(() => {
    fetchRestroMenu();
  }, []);

  const fetchRestroMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setRestroMenu(json?.data);
    } catch (err) {
      console.log("Restro menu Error: " + err);
    }
  };

  return restroMenu;
};

export default useRestroMenu;
