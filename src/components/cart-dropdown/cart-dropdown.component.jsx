import React from 'react';
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CheckoutButton
} from './cart-dropdown.styles';

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer >
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <EmptyMessageContainer>Your cart is emtpy</EmptyMessageContainer>}
            </CartItemsContainer>
            <CheckoutButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CheckoutButton>
        </CartDropdownContainer >
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));
//if we dont pass second argument in connect mapDispatchToProps,connect will pass
// dispatch to props ,so we can use dispatch
