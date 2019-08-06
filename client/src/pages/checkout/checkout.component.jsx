import React from 'react';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningContainer

} from './checkout.styles';

import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = ({ cartItems, CartTotal }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer><HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer><HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer><HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
            }
            <TotalContainer>
                <span>TOTAL: ${CartTotal}</span>
            </TotalContainer>
            <TestWarningContainer>
                <span>Please use this card infomation for testing</span>
                <br />
                <span> 4242 4242 4242 4242 -EXP:01/20 -CW:123 </span>
            </TestWarningContainer>
            <StripeCheckoutButton price={CartTotal} />
        </CheckoutPageContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    CartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);