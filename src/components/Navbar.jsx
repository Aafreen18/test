import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaAngleDown,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { LiaDogSolid } from "react-icons/lia";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  return (
    <nav className="bg-white border-b border-black sticky top-0 left-0 w-full z-50">
      {/* Top contact bar desktop */}
      <div className="hidden md:flex container mx-auto px-6 justify-end items-center py-2 text-sm text-gray-700">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>9311560101</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@dccpets.in</span>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-gray-300">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <LiaDogSolid className="rounded-full p-2 bg-green-500 text-white" size={45} />
          <span className="text-green-600 font-semibold text-lg">Dogs</span>
        </div>

        {/* Right: User icon + Hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/register">
            <FaUser className="bg-black rounded-full text-white p-2" size={36} />
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaBars size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 py-4 bg-white border-t border-gray-300 shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium hover:text-green-500">
            Home
          </Link>

          {/* About dropdown (mobile) */}
          <div className="relative flex flex-col">
            <button
              onClick={() => setIsAboutOpenMobile(!isAboutOpenMobile)}
              className="flex justify-between items-center text-gray-700 font-medium hover:text-green-600"
            >
              <span>About</span>
              <FaAngleDown className={`transition-transform ${isAboutOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {isAboutOpenMobile && (
              <div className="absolute right-0 top-full mt-2 w-48 text-white shadow-lg rounded-lg py-1 z-50 border bg-green-600">
                <Link 
                  to="/about/team" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Team
                </Link>
                <Link 
                  to="/about/mission" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Mission
                </Link>
                <Link 
                  to="/about/blog" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Blog
                </Link>
                <Link 
                  to="/about/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500 rounded-b-lg"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* Services dropdown mobile */}
          <div className="relative flex flex-col">
            <button
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
              className="flex justify-between items-center text-gray-700 font-medium hover:text-green-600"
            >
              <span>Services</span>
              <FaAngleDown className={`transition-transform ${isServicesOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpenMobile && (
              <div className="absolute right-0 top-full mt-2 w-48 text-white shadow-lg rounded-lg py-1 z-50 border bg-green-600">
                <Link 
                  to="/services/offering" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500 rounded-t-lg"
                >
                  Offerings
                </Link>
                <Link 
                  to="/services/packages" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Packages
                </Link>
                <Link 
                  to="/services/recommendations" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-green-500 rounded-b-lg"
                >
                  Recommendations
                </Link>
              </div>
            )}
          </div>

          <Link to="/referral" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium hover:text-green-500">
            Referral
          </Link>

          {/* Call row */}
          <div className="flex mt-2">
            <a href="tel:9311560101">
              <button className="bg-green-500 text-white px-6 py-2 text-sm font-semibold rounded-xl hover:bg-white hover:text-green-500 hover:border hover:border-green transition-all duration-300">
                Call Now
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex container mx-auto px-6 !pb-6 items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <LiaDogSolid className="rounded-full p-2 bg-green-500 text-white" size={60} />
          <p className="text-green-600 font-semibold mt-1 tracking-wide text-lg">Dogs</p>
        </div>

        {/* Home */}
        <Link to="/" className="flex flex-col text-left hover:text-green-500">
          <span className="text-base font-medium text-gray-700">Home</span>
          <p className="text-xs text-gray-500 leading-tight">Book An</p>
          <p className="text-xs text-gray-500 leading-tight">Appointment</p>
        </Link>

        {/* About dropdown (desktop hover) */}
        <div className="relative group">
          <button className="flex flex-col items-start focus:outline-none">
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-gray-700">About</span>
            </div>
            <p className="text-xs text-gray-500 leading-tight">Know Us <br />Better</p>
          </button>
          
          {/* Dropdown menu of about*/}
          <div className="absolute pt-2 top-full left-0 invisible group-hover:visible">
            <ul className="bg-green-600 w-48 text-white shadow-md rounded-lg z-50">
              <li>
                <Link 
                  to="/about/team" 
                  className="block px-4 py-2 hover:bg-green-500 rounded-t-lg"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/mission" 
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/blog" 
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/about/contact" 
                  className="block px-4 py-2 hover:bg-green-500 rounded-b-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Services dropdown desktop*/}
       <div className="relative group">
          <button className="flex flex-col items-start focus:outline-none">
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-gray-700">Services</span>
            </div>
            <p className="text-xs text-gray-500 leading-tight">Expert Care</p>
          </button>
          
          {/* Dropdown menu of services*/}
          <div className="absolute pt-2 top-full left-0 invisible group-hover:visible">
            <ul className="bg-green-600 w-56 text-white shadow-md rounded-lg z-50">
              <li>
                <Link 
                  to="/services/offering" 
                  className="block px-4 py-2 hover:bg-green-500 rounded-t-lg"
                >
                  Offerings
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/packages" 
                  className="block px-4 py-2 hover:bg-green-500"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/recommendations" 
                  className="block px-4 py-2 hover:bg-green-500 rounded-b-lg"
                >
                  Recommendations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Referral */}
        <Link to="/referral" className="flex flex-col text-left hover:text-green-500">
          <span className="text-base font-medium text-gray-700">Referral</span>
          <p className="text-xs text-gray-500 leading-tight">Share With Friends</p>
        </Link>

        {/* User Icon */}
        <Link to="/register" className="text-white transition flex items-center">
          <FaUser className="bg-black rounded-full p-2" size={36} />
        </Link>

        {/* Call Now Button */}
        <a href="tel:9311560101">
          <button className="bg-green-500 text-white px-8 py-2 text-sm font-semibold rounded-2xl hover:bg-white hover:text-green-500 hover:border hover:border-green transition-all duration-300">
            Call <br /> Now
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
