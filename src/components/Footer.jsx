import { Link } from "react-router-dom";
import { LiaDogSolid } from "react-icons/lia";
import Locations from "./Locations";
import {FaPhoneAlt} from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer >
        <div className="bg-black text-white px-8 pb-8 pt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 pb-6">
                {/* Logo */}
                <div className="flex flex-col text-left gap-2">
                    <LiaDogSolid className="rounded-full p-2 bg-green-500 text-white" size={45} />
                    <span className="text-green-600 font-semibold text-lg">Dogs</span>
                </div>

                {/* Company Description */}
                <div className="md:w-1/3">
                    <p className="text-sm text-gray-400">
                        DCC (Dogs Cats & Companions), A’alda Vet India Pvt. Ltd. is a 100% subsidiary of a Japanese company headquartered in Singapore, A’alda Pte. Ltd. DCC builds & operates a chain of multi-specialty animal hospitals in India.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li><Link to="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors duration-300">Our Services</Link></li>
                        <li><Link to="/team" className="hover:text-white transition-colors duration-300">Our Team</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Our Policies */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Our Policies</h3>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li><Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                        <li><Link to="/refund-policy" className="hover:text-white transition-colors duration-300">Refund Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors duration-300">Terms</Link></li>
                    </ul>
                </div>

                {/* Other Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Other Links</h3>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li><Link to="/careers" className="hover:text-white transition-colors duration-300">Careers</Link></li>
                        <li><Link to="/press" className="hover:text-white transition-colors duration-300">Press and Media</Link></li>
                        <li><Link to="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
                    </ul>
                </div>

            </div>
            <hr className="max-w-7xl mx-auto border-gray-400 border-t" />
        </div>

        <div className="bg-black text-gray-400 p-8">
            <div className="max-w-7xl mx-auto flex flex-col  md:flex-row justify-between lg:flex-row lg:flex-nowrap  gap-8 pb-6">

                {/* Services Near You */}
                <div className="">
                <h3 className="text-lg font-semibold mb-2 text-white">Services Near You</h3>
                <ul className="space-y-1 text-sm">
                    {["Consultation Near Me", "Grooming Near Me", "Vaccination Near Me", "Surgery Near Me"].map((item, i) => (
                    <li key={i}>
                        <Link to="#" className="hover:text-white transition-colors duration-300">{item}</Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Searches Near You */}
                <div className="">
                <h3 className="text-lg font-semibold mb-2 text-white">Searches Near You</h3>
                <ul className="space-y-1 text-sm">
                    {["Veterinary Hospital Near Me", "Pet Clinic Near Me", "Pet Hospital Near Me", "Pet Grooming Clinic Near Me"].map((item, i) => (
                    <li key={i}>
                        <Link to="#" className="hover:text-white transition-colors duration-300">{item}</Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Our Centers */}
                <div className="">
                <h3 className="text-lg font-semibold mb-2 text-white">Our Centers</h3>
                <ul className="space-y-1 text-sm">
                    {["Pet Clinic in Gurgaon", "Pet Clinic in Delhi", "Pet Clinic in Jaipur", "Pet Clinic in Rewari"].map((item, i) => (
                    <li key={i}>
                        <Link to="#" className="hover:text-white transition-colors duration-300">{item}</Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Services For Dogs */}
                <div className="">
                <h3 className="text-lg font-semibold mb-2 text-white">Services For Dogs</h3>
                <ul className="space-y-1 text-sm">
                    {["Consultation For Dog", "Grooming For Dog", "Vaccination For Dog", "Surgery For Dog"].map((item, i) => (
                    <li key={i}>
                        <Link to="#" className="hover:text-white transition-colors duration-300">{item}</Link>
                    </li>
                    ))}
                </ul> 
                </div>

                {/* Services For Cats */}
                <div className="">  
                    <h3 className="text-lg font-semibold mb-2 text-white">Services For Cats</h3>
                    <ul className="space-y-1 text-sm">
                        {["Consultation For Cat", "Grooming For Cat", "Vaccination For Cat", "Surgery For Cat"].map((item, i) => (
                        <li key={i}>
                            <Link to="#" className="hover:text-white transition-colors duration-300">{item}</Link>
                        </li>
                        ))}
                    </ul>
                </div>

                
            </div>
            <hr className="max-w-7xl mx-auto border-grey-400 border-t" />
        </div>
       
        <Locations />
        
        <div className="bg-black text-gray-400 p-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
                <h2 className="text-xl md:text-2xl font-bold flex items-center">
                    <FaPhoneAlt />
                    <p className="text-gray-400 px-3">(+90) 373560101</p>
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-base md:text-lg font-semibold text-gray-400 text-center sm:text-left">
                        Get updates about your <br className="hidden sm:block" /> pets health & more
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-6 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-black text-white placeholder-gray-400 w-full sm:w-auto"
                        />
                        <button className="bg-green-500 px-6 py-2 text-white text-sm font-semibold rounded-xl hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-all duration-300 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
        
        <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
                    <p className="text-gray-600">
                        © 2025 All Rights Reserved DCC Animal Hospital
                    </p>
                    
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 transition-transform hover:scale-110">
                        <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-gray-600 transition-transform hover:scale-110">
                        <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-gray-600 transition-transform hover:scale-110">
                        <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-600 transition-transform hover:scale-110">
                        <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                <button className="bg-green-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 ml-auto hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-all duration-300 whitespace-nowrap">
                    <FaWhatsapp size={20} />
                    <span>How can I help you</span>
                </button>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
