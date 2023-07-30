import React from 'react';
import "../../App.css"
import shimmerImage from "../assets/shimmer-img.png";

export const Shimmer = () => {
    return (
        <>
            <div className='loading'>
                <img src={shimmerImage} alt='swiggy' height="350px"></img>

            </div>
            <h2 className='load'>Loading.. </h2>
        </>
    );
};

