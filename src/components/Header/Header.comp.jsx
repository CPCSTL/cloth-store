import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { auth } from '../../firbase/firebase.utils';
import './Header.styles.scss'


const Header = ({currentUser})=> (
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
    </div>
    
    </div>
);

export default Header;