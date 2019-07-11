import React from 'react';

import { connect } from 'react-redux';
import { selectorCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className='no-item'>no items in cart</span>}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: selectorCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
