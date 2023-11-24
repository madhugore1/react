import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Name of Restaurant, Star Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/co6lvkimournlhxktdj3",
    name: "Meghna Foods",
    cuisine: ["Biryani, North Indian, Asian"],
    rating: "4.4 stars",
    time: "38 min",
    costForTwo: 400,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eom9j3uhsefc0kjwcfbj",
    name: "Bakingo",
    cuisine: ["Bakery", "Desert", "Beverages"],
    rating: "4.5 stars",
    time: "25 min",
    costForTwo: 200,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enrxsgw7dtly6y9tv85i",
    name: "Domino's",
    cuisine: ["Pizza", "Italian", "Pasta"],
    rating: "4.7 stars",
    time: "27 min",
    costForTwo: 300,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/co6lvkimournlhxktdj3",
    name: "Meghna Foods",
    cuisine: ["Biryani, North Indian, Asian"],
    rating: "4.4 stars",
    time: "38 min",
    costForTwo: 400,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eom9j3uhsefc0kjwcfbj",
    name: "Bakingo",
    cuisine: ["Bakery", "Desert", "Beverages"],
    rating: "4.5 stars",
    time: "25 min",
    costForTwo: 200,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enrxsgw7dtly6y9tv85i",
    name: "Domino's",
    cuisine: ["Pizza", "Italian", "Pasta"],
    rating: "4.7 stars",
    time: "27 min",
    costForTwo: 300,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/co6lvkimournlhxktdj3",
    name: "Meghna Foods",
    cuisine: ["Biryani, North Indian, Asian"],
    rating: "4.4 stars",
    time: "38 min",
    costForTwo: 400,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eom9j3uhsefc0kjwcfbj",
    name: "Bakingo",
    cuisine: ["Bakery", "Desert", "Beverages"],
    rating: "4.5 stars",
    time: "25 min",
    costForTwo: 200,
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enrxsgw7dtly6y9tv85i",
    name: "Domino's",
    cuisine: ["Pizza", "Italian", "Pasta"],
    rating: "4.7 stars",
    time: "27 min",
    costForTwo: 300,
  },
];

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
        <h5>{rating}</h5>
        <h5>{time}</h5>
        <h5>₹ {costForTwo} for two</h5>
      </div>
    </div>
  );
};

const Body = () => {
  console.log("Body component rendered");
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resData, index) => (
          <RestaurantCard resData={resData} key={index} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
