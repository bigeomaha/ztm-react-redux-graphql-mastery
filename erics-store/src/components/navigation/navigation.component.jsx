import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import './navigation.styles.scss';
import { ReactComponent as StoreLogo} from '../../assets/store-logo.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";


const Navigation = () => {
    const {currentUser,setCurrentUser} = useContext(UserContext);
    console.info('currentUser', currentUser);

    const signOutHandler = async () => {
        // expected 'undefined'
        const res = await signOutUser();
        setCurrentUser(res);
    };

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
                            <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
                        ) : (
                            <Link to='/authentication' className='nav-link'>Sign In</Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;