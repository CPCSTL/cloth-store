import React from 'react';
import CustomButton from '../CustomButton/custom-button.comp'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.comp'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems})=> (
    <div className='cart-dropdown'>
    <div className='cart-items'>
     {
         cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem}/>))
     }
    </div>
    <CustomButton>Go To Cart</CustomButton>
    </div>
);

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})
 export default connect(mapStateToProps)(CartDropdown);