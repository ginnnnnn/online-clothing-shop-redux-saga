import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, CartTotal }) => {
    console.log(CartTotal)
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div><div className='header-block'>
                    <span>Quantity</span>
                </div><div className='header-block'>
                    <span>Price</span>
                </div><div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
            }
            <div className='total'>
                <span>TOTAL: ${CartTotal}</span>
            </div>

        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    CartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);