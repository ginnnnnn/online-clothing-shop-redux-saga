import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    //stripe use cent ,as we use dollars so time 100
    const publishableKey = "pk_test_x7QGV6EtI6BoFeosWRzrpqFe00mspC0ynR";

    const onToken = token => {
        console.log(token);
        alert('Your payment is successful')
    };
    //this is for catch token from stripe passing ,normally we fetch to our backend
    //to do our chart/then comeback

    return (
        <StripeCheckout
            label='Pay Now'
            name='cool cool shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;