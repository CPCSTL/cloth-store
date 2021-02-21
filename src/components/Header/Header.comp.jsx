import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { auth } from '../../firbase/firebase.utils';
import './Header.styles.scss'
import CartIcon from '../cart_icon/cart_icon.comp'
import CartDropdown from '../cart_dropdown/cart-dropdown.comp'
// import userReducer from '../../redux/user/user.reducer';


const Header = ({currentUser ,toggleCart})=> (
    <div className='header'>
    <Link className='logo-container' to='/'>
    <Logo className='logo'  />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>Shop</Link>
    <Link className='option' to='/contact'>Contact</Link>
    { currentUser ? 
     (<div className='option' onClick={()=> auth.signOut()}>welcome back {currentUser.displayName}</div>)
    :(<Link className='sign-color' to='/signin'> Sign in</Link>) }
    <CartIcon />
    </div>
   {toggleCart ? null :  <CartDropdown />}
    </div>
);

const mapStateToProps = ({user , cart}) => ({
    currentUser: user.currentUser,
    toggleCart: cart.hidden
})


export default connect(mapStateToProps)(Header);