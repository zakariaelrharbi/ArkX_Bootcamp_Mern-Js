import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <div className="flex flex-wrap items-center justify-around gap-5 relative">
          <Link to="/" className="flex items-center p-2 dark:text-[#007bff] font-bold text-3xl">
            New <span>W</span>aves
          </Link>
          <div className="flex lg:order-1 max-sm:ml-auto">
            <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
              Sign up
            </button>
            <button id="toggle" className="lg:hidden ml-7" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
            </button>
          </div>
          <ul id="collapseMenu" className={`lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full ${isMenuOpen ? '' : 'hidden'}`}>
          <li className="flex">
            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/' ? '#8B5CF6' : 'dark:text-violet-600' }}>Home</Link>
          </li>
          <li className="flex">
            <Link to="/AboutPage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/AboutPage' ? '#8B5CF6' : 'dark:border-' }}>About</Link>
          </li>
          <li className="flex">
            <Link to="/BlogPage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/BlogPage' ? '#8B5CF6' : 'dark:border-' }}>Blog</Link>
          </li>
          <li className="flex">
            <Link to="/ContactPage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/ContactPage' ? '#8B5CF6' : 'dark:border-' }}>Contact</Link>
          </li>
          </ul>
          
            {/* here when you click to Fabar button for mobile */}

          {isMenuOpen && (
          <ul className="lg:hidden mt-2">
             <li className="flex mb-3">
            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/' ? '#8B5CF6' : 'dark:text-violet-600' }}>Home</Link>
          </li>
          <li className="flex mb-3">
            <Link to="/AboutPage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/AboutPage' ? '#8B5CF6' : 'dark:border-' }}>About</Link>
          </li>
          <li className="flex mb-3">
            <Link to="/BlogPage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/BlogPage' ? '#8B5CF6' : 'dark:border-' }}>Blog</Link>
          </li>
          <li className="flex mb-3">
            <Link to="/ContactPage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-" style={{ borderBottomColor: location.pathname === '/ContactPage' ? '#8B5CF6' : 'dark:border-' }}>Contact</Link>
          </li>
          </ul>
        )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;

