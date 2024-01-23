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
      const data = await fetch(
        // swiggy restroMenu api
        // MENU_API + resId

        // bypass cors proxy api
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D18.5898463%26lng%3D73.8264677%26restaurantId%3D" +
          resId
      );
      const json = await data.json();
      setRestroMenu(json?.data);
    } catch (err) {
      console.log("Restro menu Error: " + err);
    }
  };

  return restroMenu;
};

export default useRestroMenu;
