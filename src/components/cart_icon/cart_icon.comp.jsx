import React from 'react';
import './cart_icon.styles.scss';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions'


const CartIcon = ({toggleCartHidden , cartCount})=>(
    <div className='cart-icon'
    onClick ={()=>toggleCartHidden()}
    >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartCount}</span>
    </div>
);


const mapStateToProps =({cart:{cartItems}})=>({
    cartCount: cartItems.reduce((accumalatedQuantity,cartItem)=>
    (accumalatedQuantity + cartItem.quantity),0)
})



const mapDispatchToProps = dispatch=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon)


