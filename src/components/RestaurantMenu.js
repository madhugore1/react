import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${RES_MENU_URL}${resId}`);
    const json = await response.json();
    const res = json?.data?.cards[0]?.card?.card?.info;
    const obj = {
      id: res.id,
      name: res.name,
      avgRating: res.avgRating,
      costForTwo: res.costForTwoMessage,
      cuisines: res.cuisines,
      cloudinaryImageId: res.cloudinaryImageId,
    };
    setResInfo(obj);

    const menu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
        (item) => item.card.info
      );
    const menuArr = menu.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        imageId: item.imageId,
      };
    });
    setResMenu(menuArr);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resInfo.name}</h1>
      {resInfo.cuisines.join(", ")} - {resInfo.costForTwo}
      <h3>Menu:</h3>
      <ul>
        {resMenu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
