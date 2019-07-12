import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, subItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, clearItem, addItem, subItem }) => {
    const { imageUrl, name, price, quantity } = item
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="check-item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    onClick={() => subItem(item)}
                    className="arrow">&#10094;</div>
                <span className='value'>{quantity}</span>
                <div
                    onClick={() => addItem(item)}
                    className="arrow">&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div
                onClick={() => clearItem(item)}
                className='remove-button'>&#10005;</div>

        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    subItem: (item) => dispatch(subItem(item)),
    addItem: (item) => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);