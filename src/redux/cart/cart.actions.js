import cartActionTypes from './cart.types'

export const toggleCartHidden = ()=>({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
    type:cartActionTypes.CART_ITEM,
    payload: item
})