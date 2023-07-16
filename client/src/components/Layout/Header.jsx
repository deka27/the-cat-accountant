import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PiCatLight } from 'react-icons/pi'

import '../../styles/header.css'

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    setIsNavExpanded(false);
  }

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };
  return (
    <>
      <div>
        <nav className="navigation">
          
          <div className="">
            <span className="product-info">
              <div className="logo-img-container"><PiCatLight className="logo-img" /></div>
              <Link to="/" className="brand-name">The CAT Accountant</Link>
            </span>

           
              <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                <GiHamburgerMenu />
              </button>
            
          </div>

          <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>

            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick}>Logout</button>
              </div>
            )}

            <ul className="">
              <li className="">
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              {!user && (
                <div className="logsign">
                  <li className="">
                    <Link to="/login" onClick={handleLinkClick}>
                      Login
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/signup" onClick={handleLinkClick}>
                      Signup
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
