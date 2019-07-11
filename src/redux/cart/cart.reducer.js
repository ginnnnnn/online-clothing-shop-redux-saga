import CartActionTypes from './cart.types';
const INITIAL_STATE = {
    cartDropdownHidden: true
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartDropdownHidden: !state.cartDropdownHidden
            }
        default:
            return state
    }
};

export default CartReducer;
