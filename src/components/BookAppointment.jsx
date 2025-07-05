import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const BookAppointment = () => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedFacility, setSelectedFacility] = useState("Facility");

  const cityFacilitiesMap = {
    "Gurugram": ["DCC Animal Hospital, Gurugram", "DCC Petcare Gurugram"],
    "New Delhi": ["DCC Animal Hospital, GK2, Delhi", "DCC Animal Hospital, Uday Park, Delhi"],
    "Jaipur": ["DCC Animal Hospital, Jaipur"],
    "Rewari": ["DCC Animal Hospital, Rewari"],
    "Tele-consult From Home": ["Not Applicable"]
  };

  const cities = Object.keys(cityFacilitiesMap);
  const [availableFacilities, setAvailableFacilities] = useState([]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedFacility("Select Facility");
    const facilities = cityFacilitiesMap[city] || [];
    setAvailableFacilities(facilities);
  };

  const toggleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
  };

  const getFacilityButtonText = () => {
    if (selectedCity === "Select City") return "Select city first";
    if (availableFacilities[0] === "Not Applicable") return "Not applicable";
    return selectedFacility;
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 rounded-3xl shadow-lg p-6 bg-green-500 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Book an Appointment</h2>

      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-4 space-y-4 lg:space-y-0">
        {/* City Dropdown */}
        <div className="w-full lg:w-1/3">
          <div
            onClick={toggleCityDropdown}
            className="flex justify-between items-center text-white cursor-pointer shadow-md rounded-3xl px-4 py-2 bg-green-700 hover:bg-white hover:text-black"
          >
            <span>Select City</span>
            {showCityDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showCityDropdown && (
            <ul className="rounded-lg mt-2 bg-white shadow-inner">
              {cities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCitySelect(city)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Spacer */}
        <div className="h-4 lg:h-0"></div>

        {/* Facility Dropdown */}
        <div className="w-full lg:w-1/3">
          <div
            className={`flex justify-between items-center text-white cursor-pointer shadow-md rounded-3xl px-4 py-2 ${
              selectedCity === "Select City" ? "bg-green-700 opacity-50" : "bg-green-700 hover:bg-white hover:text-black"
            }`}
          >
            <span>{getFacilityButtonText()}</span>
            {selectedCity !== "Select City" && availableFacilities[0] !== "Not Applicable" && 
              <FaAngleUp /> }
          </div>
          {availableFacilities[0] !== "Not Applicable" && (
            <ul className="rounded-lg mt-2 bg-white shadow-inner">
              {availableFacilities.map((facility, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedFacility(facility);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {facility}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Spacer */}
        <div className="h-4 lg:h-0"></div>

        {/* Book Button */}
        <div className="w-full lg:w-1/3">
          <button className="w-full bg-purple-950 text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-all duration-300 whitespace-nowrap">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;