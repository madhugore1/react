import { RES_IMAGE_BASE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { imageId, name, cuisines, avgRating, deliveryTime, costForTwo } =
    resData;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          src={`${RES_IMAGE_BASE_URL}/${resData.imageId}`}
          alt="Restaurant Img"
          className="res-img"
        />
      </div>
      <div className="res-content">
        <h3 className="res-title">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{deliveryTime} min</h5>
        <h5>₹ {costForTwo} for two</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
