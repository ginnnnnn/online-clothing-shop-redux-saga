import React from 'react';
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className='empty-message'>Your cart is emtpy</span>}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div >
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));
//if we dont pass second argument in connect mapDispatchToProps,connect will pass
// dispatch to props ,so we can use dispatch
