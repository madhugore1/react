import RestaurantCard from "./RestaurantCard";
import { mockResList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [resList, setResList] = useState(mockResList);

  const handleFilterBtnClick = () => {
    const filteredData = resList.filter((resData) => resData.rating >= 4);
    setResList(filteredData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterBtnClick}>
          Filter Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((resData, index) => (
          <RestaurantCard resData={resData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
