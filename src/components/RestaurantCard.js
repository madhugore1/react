const RestaurantCard = ({ resData }) => {
  const { img, name, cuisine, rating, time, costForTwo } = resData;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img src={img} alt="Restaurant Img" className="res-img" />
      </div>
      <div className="res-content">
        <h3 className="res-title">{name}</h3>
        <h5>{cuisine.join(", ")}</h5>
        <h5>{rating} stars</h5>
        <h5>{time}</h5>
        <h5>₹ {costForTwo} for two</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
