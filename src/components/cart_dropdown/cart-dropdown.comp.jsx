import React from 'react';
import CustomButton from '../CustomButton/custom-button.comp'
import './cart-dropdown.styles.scss'

const CartDropdown = ()=> (
    <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomButton>Go To Cart</CustomButton>
    </div>
);
 export default CartDropdown;