import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { RES_CARD_TYPE, SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  // Local State Variables
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Whenever state variables change, React re-renders the component (runs the Reconciliation cycle)
  console.log("Body rendered");

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const json = await response.json();
    const resCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.id === RES_CARD_TYPE
    );

    const restaurants =
      resCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ?.map((item) => item.info)
        ?.map((item) => {
          return {
            id: item.id,
            name: item.name,
            avgRating: item.avgRating,
            cuisines: item.cuisines,
            imageId: item.cloudinaryImageId,
            costForTwo: item.costForTwo,
            deliveryTime: item.sla?.deliveryTime,
          };
        });

    setResList(restaurants);
    setFilteredResList(restaurants);
  };

  const handleFilterBtnClick = () => {
    const filteredData = resList.filter((resData) => resData.avgRating >= 4);
    setFilteredResList(filteredData);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    setFilteredResList(
      resList.filter((resData) =>
        resData.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterBtnClick}>
          Filter Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.length === 0 && <Shimmer />}
        {filteredResList.map((resData) => (
          <RestaurantCard resData={resData} key={resData.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
