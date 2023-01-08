import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';


const Navbar = () => {
    const {logout, isLogined} = useContext(AuthContext)

    return ( 
        <nav>
            <div className="nav-wrapper navbar blue darken-4">
                <Link to="/" className="brand-logo">MERN Todo App</Link>
                {isLogined ? (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a onClick={logout}>Logout</a></li>
                    </ul>
                ) : (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a>Sign In</a></li>
                    </ul>
                )}
                <div className="nav-item"></div>
            </div>
        </nav>
     );
}
 
export default Navbar;