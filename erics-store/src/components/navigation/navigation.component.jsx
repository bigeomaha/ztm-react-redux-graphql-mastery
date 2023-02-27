import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';


const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <div>Logo</div>
                </Link>
                <div className="nav-links-container">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/shop' className='nav-link'>Shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;