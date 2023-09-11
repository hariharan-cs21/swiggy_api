import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "./constants";
import { Shimmer } from "./Shimmer";
import "../../App.css";
import { getRestaurantInfo } from "../utils/api";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { restaurantData, menuItems } = await getRestaurantInfo(id);
      setRestaurant(restaurantData);
      setMenuItems(menuItems);
    }
    fetchData();
  }, [id]);

  const dispatch = useDispatch();
  const addFoodItem = (namee) => {
    dispatch(addItem(namee));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      <div className="restaurant-info">
        <h2 className="restaurant-name">{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt={restaurant.name} style={{height:"250px"}}
          className="restaurant-image"
        />
        <p className="restaurant-city">{restaurant.city}</p>
        <p className="restaurant-city">{restaurant.ratings}</p>

      </div>
      <div className="menu-items">
        <ul className="menu-items-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <img
                  src={ITEM_IMG_CDN_URL + item.imageId}
                  alt={item.name} style={{borderRadius:"10px"}}
                  height="80px"
                />
                <p className="item-price">Rs {item.price / 100}</p>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  addFoodItem(item);
                }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
