import React from "react";

const HotelCard = ({ name, area, costForTwo, hphoto, avgRatingString
}) => {
  const img_url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const cardStyles = {
    backgroundColor: "#fff",
    border: "1px solid #f1f1f1",
    borderRadius: "10px",
    width: "300px",
    display: "inline-block",
    verticalAlign: "top",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#333",
  };

  const imgStyles = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  };

  const contentStyles = {
    padding: "20px",
  };

  const nameStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "5px 0",
    color: "#333",
  };

  const areaStyles = {
    fontSize: "18px",
    margin: "5px 0",
    color: "#888",
  };

  const ratingStyles = {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#fc8019",
  };


  const handleCardMouseLeave = () => {
    cardStyles.transform = "scale(1)";
    cardStyles.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div
      style={cardStyles}
      onMouseLeave={handleCardMouseLeave}
    >
      {hphoto && (
        <img
          src={img_url + hphoto}
          alt="Hotel Image"
          style={imgStyles}
        />
      )}
      <div style={contentStyles}>
        <h2 style={nameStyles}>{name}</h2>
        <h4 style={areaStyles}>{area}</h4>
        <h4 style={ratingStyles}>⭐{avgRatingString}</h4>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default HotelCard;
