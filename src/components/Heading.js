import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <img
            src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA=w480-h960-rw"
            height="40px"
            width="40px"
            className="swiggy"
            alt=""
        />
    );
};
const Heading = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);
    return (
        <div className="header">
            <Title />
            <div className="navbar" >
                <ul>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <li>Home</li>
                    </Link>
                    <Link to="/instamart" style={{ textDecoration: "none", color: "black" }}>
                        <li>Instamart</li>
                    </Link>

                    <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ fontSize: "1.4rem", display: "flex", justifyContent: "flex-end", alignItems: "center", marginLeft: "0.5rem", marginRight: "1.5rem" }}>
                            <i className="uil uil-shopping-cart" ></i><p style={{ fontSize: "0.8rem" }}>{cartItems.length} items</p>
                        </div>
                    </Link>
                </ul>
            </div>
        </div>
    );
};
export default Heading