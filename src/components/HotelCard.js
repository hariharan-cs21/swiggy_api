import React from "react";
import "../../App.css"

const HotelCard = ({ name, area, lastMileTravelString, hphoto }) => {
    const img_url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

    return (
        <div className="cardview">
            {hphoto ? (
                <img src={img_url + hphoto} width="300px" height="200px" alt="Hotel Image" className="himg" />
            ) : null}
            <h2>{name}</h2>
            <h4 style={{ fontSize: "13px" }}>{area}</h4>
            <h4>{lastMileTravelString} stars</h4>
        </div>
    );
};

export default HotelCard;
