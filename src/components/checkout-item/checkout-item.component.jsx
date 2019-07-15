import React from 'react';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, subItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, clearItem, addItem, subItem }) => {
    const { imageUrl, name, price, quantity } = item
    return (
        <CheckoutItemContainer>
            <ImageContainer className="image-container">
                <img src={imageUrl} alt="check-item" />
            </ImageContainer>
            <TextContainer >{name}</TextContainer>
            <QuantityContainer>
                <div
                    onClick={() => subItem(item)}
                    className="arrow">&#10094;</div>
                <span className='value'>{quantity}</span>
                <div
                    onClick={() => addItem(item)}
                    className="arrow">&#10095;</div>
            </QuantityContainer>
            <TextContainer >${price}</TextContainer>
            <RemoveButtonContainer
                onClick={() => clearItem(item)}
            >&#10005;</RemoveButtonContainer>

        </CheckoutItemContainer>
    );
}
const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    subItem: (item) => dispatch(subItem(item)),
    addItem: (item) => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);