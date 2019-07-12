export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id);

    if (existingCartItems) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) =>
    cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)

export const subItemFromCart = (cartItems, itemToSubtract) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === itemToSubtract.id);
    let updateItems = [];
    if (existingCartItems) {
        updateItems = cartItems.map(cartItem =>
            cartItem.id === itemToSubtract.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )
    }

    return updateItems.filter(updateItem => updateItem.quantity >= 1)
}

