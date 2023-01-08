

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-wrapper navbar blue darken-4">
                <a href="/" className="brand-logo">MERN Todo App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sign In</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;