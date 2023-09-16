import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Heading.css";


const Title = () => {
    return (
        <>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/306px-Swiggy_logo.svg.png?20220725160748"
                height="40px"
                width="150px"
                className="swiggy"
                alt=""
            />
        </>
    );
};

const Heading = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header">
            <Title />
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/instamart" className="nav-link">
                            Instamart
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="nav-link">
                            <div className="cart-icon">
                                <i className="uil uil-shopping-cart"></i>
                                <span className="cart-count">{cartItems.length}</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;
