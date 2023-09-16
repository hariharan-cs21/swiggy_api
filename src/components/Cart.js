import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITEM_IMG_CDN_URL } from './constants';
import './Cart.css';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const totalPrice = cartItems.reduce((initial, item) => initial + item.price, 0);

    const dispatch = useDispatch();
    const ClearCart = () => {
        dispatch(clearCart());
    };
    const delItem = (index) => {
        dispatch(removeItem(index));
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            <p className="cart-total-items">Total Items: {cartItems.length}</p>
            <div className="items-list">
                {cartItems.map((item, index) => (
                    <div key={item.name} className="item-container">
                        <img
                            src={`${ITEM_IMG_CDN_URL}${item.imageId}`}
                            alt={item.name}
                            className="item-image"
                        />
                        <div className="item-details">
                            <div className="item-header">
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-price">Rs {(item.price / 100)}</p>
                                <p className='cart-remove' onClick={() => delItem(index)}>Remove</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="cart-total">
                Total: Rs {totalPrice / 100}
            </p>
            <button onClick={ClearCart} className="remove-from-cart"
            >Clear Cart</button>
        </div>
    );
};

export default Cart;
