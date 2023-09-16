import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "./HotelCard";
import "../../App.css";
import { Shimmer } from "./Shimmer";
import famous from "../assets/famous.png";
import { swiggy_api_URL } from './constants';
import { Link } from "react-router-dom";
import On_Offline from "../utils/On_Offline";

function filterHotel(searchText, hotels) {
    return hotels.filter((i) => i.info.name.toLowerCase().includes(searchText.toLowerCase()));
}

const Body = () => {
    const [allHotels, setAllHotels] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getHotels();
    }, []);

    async function getHotels() {
        try {
            const response = await axios.get(swiggy_api_URL);
            const json = response.data;
            const hotelCards = json?.data.cards[2];
            const hotelData = hotelCards?.card?.card.gridElements?.infoWithStyle?.restaurants || [];
            setAllHotels(hotelData);
            setHotels(hotelData);
        } catch (error) {
            console.error("Error in fetching hotel data:", error);
        }
    }

    useEffect(() => {
        const filteredHotels = filterHotel(searchText, allHotels);
        setHotels(filteredHotels);
    }, [searchText, allHotels]);

    const onlineStatus = On_Offline();

    if (onlineStatus === false) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
                <h1 className="bg-orange-400 py-4 px-6 mx-8 my-4 inline-block text-xl font-semibold text-white rounded-md shadow-lg">
                    <span className="mr-2">⚠️</span> Oops! It seems like you're currently offline. Please take a moment to check your internet connection.

                </h1>
            </div>

        );
    }
    console.log(allHotels);
    return allHotels.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-view">
                <input
                    type="text"
                    className="searchbox"
                    placeholder="Search for your favourite restaurants"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {hotels.length === 0 && (
                    <>
                        <img src={famous} height="50px" width="50px" alt="Not found" />
                        <p>No hotel named <strong>{searchText}</strong></p>
                    </>
                )}
            </div>
            <div className="cardHotel">
                {hotels.map((restaurant) => {
                    return (
                        <Link to={"/hotelmenu/" + restaurant.info.id} key={restaurant.info.id}>
                            <HotelCard
                                hphoto={restaurant.info.cloudinaryImageId}
                                name={restaurant.info.name}
                                area={restaurant.info.areaName}
                                avgRatingString={restaurant.info.avgRatingString}
                                costForTwo={restaurant.info.costForTwo}
                            />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
