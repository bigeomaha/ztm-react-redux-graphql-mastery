import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import { ReactComponent as StoreLogo} from '../../assets/store-logo.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <div><StoreLogo/></div>
                </Link>
                <div className="nav-links-container">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                    <Link to='/signin' className='nav-link'>Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;