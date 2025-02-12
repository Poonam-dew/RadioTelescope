import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Navbar.css';
import rtpLogo from '../Assets/rtpLogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <nav className="navbar">
      <div className="left-section">
        <img className="logo" src={rtpLogo} alt="Radio Logo" />
        <h1 className="navbar-heading">Radio Astronomy</h1>
      </div>

      <div ref={menuRef} className={isMobile ? "right-section-mobile" : "right-section"}>
        <NavLink to="/" className="n-link" onClick={() => setIsMobile(false)}>Home</NavLink>
        
        {/* <NavLink to="/scientificHistory" className="n-link" onClick={() => setIsMobile(false)}>Scientific History</NavLink> */}
        
        <NavLink to="/telescopes" className="n-link" onClick={() => setIsMobile(false)}>Telescopes We Built</NavLink>
        <NavLink to="/events" className="n-link" onClick={() => setIsMobile(false)}>Events</NavLink>
        <NavLink to="/resultsAndPublication" className="n-link" onClick={() => setIsMobile(false)}>Results and Resources</NavLink>
       
        <NavLink to="/team" className="n-link" onClick={() => setIsMobile(false)}>Team</NavLink>
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
