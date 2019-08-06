import React from 'react';
import { CartIconContainer, ItemCountContainer } from './cart-icon.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ({ itemsCounts, toggleCartHidden }) => {

    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCountContainer className="item-count">{itemsCounts}</ItemCountContainer>
        </CartIconContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    itemsCounts: selectCartItemsCount
})



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);