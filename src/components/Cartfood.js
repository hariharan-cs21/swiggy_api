import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
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


    return
    (
        <div className="restaurant-container">

            {menuItems.map((item) => (
                <li key={item.id} className="menu-item">
                    <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">Rs {item.price / 100}</p>
                    </div>

                </li>
            ))}

        </div>
    );
};

export default RestaurantMenu;
