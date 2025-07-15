import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBars,
  FaAngleDown,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  return (
    <nav className="bg-[#f7f3ea] border-b border-[#b98a32]/30 top-0 left-0 w-full z-50">
      {/* Top contact bar desktop */}
      <div className="hidden md:flex container mx-auto px-6 justify-end items-center py-2 text-sm text-[#821b1f]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 hover:text-[#b98a32] transition-colors">
            <FaPhoneAlt />
            <span>9311560101</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#b98a32] transition-colors">
            <FaEnvelope />
            <span>info@dccpets.in</span>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-[#b98a32]/30">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Petpals-logo.png"
            alt="Petpals Logo"
            className="w-[150px] h-auto object-contain"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(130, 27, 31, 0.2))'
            }}
          />
        </div>

        {/* Right: User icon + Hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/register">
            <FaUser className="bg-[#821b1f] rounded-full text-[#f7f3ea] p-2" size={36} />
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#821b1f] hover:text-[#b98a32] transition-colors"
          >
            <FaBars size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 py-4 bg-[#f7f3ea] border-t border-[#b98a32]/30">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="text-[#821b1f] font-medium hover:text-[#b98a32] transition-colors"
          >
            Home
          </Link>

          {/* About dropdown (mobile) */}
          <div className="relative flex flex-col z-50">
            <button
              onClick={() => setIsAboutOpenMobile(!isAboutOpenMobile)}
              className="flex justify-between items-center text-[#821b1f] font-medium hover:text-[#b98a32] transition-colors"
            >
              <span>About</span>
              <FaAngleDown className={`transition-transform ${isAboutOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {isAboutOpenMobile && (
              <div className="absolute right-0 top-full mt-2 w-48 shadow-lg rounded-lg py-1 z-50 border border-[#b98a32]/20 bg-[#f7f3ea]">
                <Link 
                  to="/about/team" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-t-lg transition-colors"
                >
                  Team
                </Link>
                <Link 
                  to="/about/mission" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-colors"
                >
                  Mission
                </Link>
                <Link 
                  to="/about/blog" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  to="/about/contact" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-b-lg transition-colors"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* Services dropdown mobile */}
          <div className="relative flex flex-col z-50">
            <button
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
              className="flex justify-between items-center text-[#821b1f] font-medium hover:text-[#b98a32] transition-colors"
            >
              <span>Services</span>
              <FaAngleDown className={`transition-transform ${isServicesOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpenMobile && (
              <div className="absolute right-0 top-full mt-2 w-48 shadow-lg rounded-lg py-1 z-50 border border-[#b98a32]/20 bg-[#f7f3ea]">
                <Link 
                  to="/services/offerings" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-t-lg transition-colors"
                >
                  Offerings
                </Link>
                <Link 
                  to="/services/packages" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-colors"
                >
                  Packages
                </Link>
                <Link 
                  to="/services/recommendations" 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-b-lg transition-colors"
                >
                  Recommendations
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/referral" 
            onClick={() => setIsOpen(false)} 
            className="text-[#821b1f] font-medium hover:text-[#b98a32] transition-colors"
          >
            Referral
          </Link>

          {/* Call row */}
          <div className="flex mt-2">
            <a href="tel:9311560101">
              <button className="bg-[#821b1f] text-[#f7f3ea] px-6 py-2 text-sm font-semibold rounded-xl hover:bg-[#b98a32] transition-all duration-300">
                Call Now
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex container mx-auto px-6 !pb-6 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Petpals-logo.png"
            alt="Petpals Logo"
            className="w-[180px] h-auto object-contain"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(130, 27, 31, 0.2))'
            }}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {/* Home */}
          <Link 
            to="/" 
            className="flex flex-col text-left hover:text-[#b98a32] transition-colors"
          >
            <span className="text-base font-medium text-[#821b1f]">Home</span>
            <p className="text-xs text-[#821b1f]/70 leading-tight">Book An</p>
            <p className="text-xs text-[#821b1f]/70 leading-tight">Appointment</p>
          </Link>

          {/* About dropdown (desktop hover) */}
          <div className="relative group">
            <button className="flex flex-col items-start focus:outline-none">
              <div className="flex items-center gap-1">
                <span className="text-base font-medium text-[#821b1f] group-hover:text-[#b98a32] transition-colors">About</span>
              </div>
              <p className="text-xs text-[#821b1f]/70 leading-tight">Know Us <br />Better</p>
            </button>
            
            {/* Dropdown menu of about*/}
            <div className="absolute pt-2 top-full left-0 invisible group-hover:visible z-50">
              <ul className="bg-[#f7f3ea] w-48 shadow-lg rounded-lg border border-[#b98a32]/20 z-50">
                <li>
                  <Link 
                    to="/about/team" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-t-lg transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/mission" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-colors"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/blog" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/contact" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-b-lg transition-colors"
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
                <span className="text-base font-medium text-[#821b1f] group-hover:text-[#b98a32] transition-colors">Services</span>
              </div>
              <p className="text-xs text-[#821b1f]/70 leading-tight">Expert Care</p>
            </button>
            
            {/* Dropdown menu of services*/}
            <div className="absolute pt-2 top-full left-0 invisible group-hover:visible z-50">
              <ul className="bg-[#f7f3ea] w-56 shadow-lg rounded-lg border border-[#b98a32]/20 z-50">
                <li>
                  <Link 
                    to="/services/offering" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-t-lg transition-colors"
                  >
                    Offerings
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/packages" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] transition-colors"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/recommendations" 
                    className="block px-4 py-2 hover:bg-[#821b1f] hover:text-[#f7f3ea] rounded-b-lg transition-colors"
                  >
                    Recommendations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Referral */}
          <Link 
            to="/referral" 
            className="flex flex-col text-left hover:text-[#b98a32] transition-colors"
          >
            <span className="text-base font-medium text-[#821b1f]">Referral</span>
            <p className="text-xs text-[#821b1f]/70 leading-tight">Share With Friends</p>
          </Link>

          {/* User Icon */}
          <Link to="/register" className="transition flex items-center">
            <FaUser className="bg-[#821b1f] rounded-full text-[#f7f3ea] p-2" size={36} />
          </Link>

          {/* Call Now Button */}
          <a href="tel:9311560101">
            <button className="bg-[#821b1f] text-[#f7f3ea] px-8 py-2 text-sm font-semibold rounded-2xl hover:bg-[#b98a32] transition-all duration-300">
              Call <br /> Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;