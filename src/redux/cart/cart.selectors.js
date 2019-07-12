import { createSelector } from 'reselect';
//from UI library reselect 


const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],
    (cart) => cart.cartItems);
//use createSelector to create selector will make it become a memorize selector
//use it as selectorCartItems(state) in mapStateToProps
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));


export const selectCartDropdownHidden = createSelector([selectCart], (cart) => cart.cartDropdownHidden)