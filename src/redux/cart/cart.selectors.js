import { createSelector } from 'reselect';
//from UI library reselect 


const selectorCart = state => state.cart;

export const selectorCartItems = createSelector([selectorCart],
    (cart) => cart.cartItems);
//use createSelector to create selector will make it become a memorize selector
//use it as selectorCartItems(state) in mapStateToProps
export const selectorCartItemsCount = createSelector([selectorCartItems], (cartItems) =>
    cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
)