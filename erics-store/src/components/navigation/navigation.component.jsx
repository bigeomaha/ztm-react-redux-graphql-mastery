import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector} from "react-redux"
import './navigation.styles.scss';
import { ReactComponent as StoreLogo} from '../../assets/store-logo.svg';
import { signOutUser } from "../../utils/firebase-auth.utils";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";
import {selectShoppingCartToggle} from "../../store/shoppingcart/shopcart.selector"

const Navigation = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const is_cart_visible = useSelector(selectShoppingCartToggle);


    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <div><StoreLogo/></div>
                </Link>
                <div className="nav-links-container">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ) : (
                            <Link to='/authentication' className='nav-link'>Sign In</Link>
                        )
                    }
                    { currentUser && <CartIcon />}
                </div>
                {is_cart_visible && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;