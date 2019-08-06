import React from 'react';
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
} from './cart-item.styles';


const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <span >{name}</span>
                <span >{quantity} X ${price}</span>
            </ItemDetailsContainer>

        </CartItemContainer>
    );
}

export default CartItem;