import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import { Shimmer } from "./Shimmer";
import "../../App.css";
import { getRestaurantInfo } from "../utils/api";
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

    return !restaurant ? (
        <Shimmer />
    ) : (
        <div className="restaurant-container">
            <div className="restaurant-menu">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <img
                    src={IMG_CDN_URL + restaurant.cloudinaryImageId}
                    alt={restaurant.name}
                    className="restaurant-image"
                />
                <h2 className="restaurant-city">{restaurant.city}</h2>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li key={item.id}>{item?.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
