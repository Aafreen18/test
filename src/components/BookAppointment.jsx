import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const BookAppointment = () => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const cityFacilitiesMap = {
    "Gurugram": ["DCC Animal Hospital, Gurugram", "DCC Petcare Gurugram"],
    "New Delhi": ["DCC Animal Hospital, GK2, Delhi", "DCC Animal Hospital, Uday Park, Delhi"],
    "Jaipur": ["DCC Animal Hospital, Jaipur"],
    "Rewari": ["DCC Animal Hospital, Rewari"],
    "Tele-consult From Home": ["Not Applicable"]
  };

  const cities = Object.keys(cityFacilitiesMap);
  const [availableFacilities, setAvailableFacilities] = useState([]);
  const [showIconCity, setShowIconCity] = useState(true);
  const [showIconFacility, setShowIconFacility] = useState(true);

  const handleCitySelect = (city) => {
    const facilities = cityFacilitiesMap[city] || [];
    setAvailableFacilities(facilities);
  };

  const toggleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
  };

  const getFacilityButtonText = () => {
    if (availableFacilities[0] === "Not Applicable") return "Not applicable";
    return "Facility";
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 rounded-3xl shadow-lg p-6 bg-[#821b1f] transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#f7f3ea]">Book an Appointment</h2>

      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-4 space-y-4 lg:space-y-0">
        {/* City Dropdown */}
        <div className="w-full lg:w-1/3">
          <div
            onClick={toggleCityDropdown}
            onMouseDown={() => { setShowIconCity(false) }}
            onMouseUp={() => { setShowIconCity(true) }}
            onMouseLeave={() => { setShowIconCity(true) }}
            className="relative flex justify-center items-center text-[#f7f3ea] cursor-pointer shadow-md rounded-3xl px-4 py-2 bg-[#821b1f] hover:bg-[#f7f3ea] hover:text-[#821b1f] border border-[#f7f3ea]"
          >
            <span className="pointer-events-none">Select City</span>

            {showIconCity && (
              <div className="absolute right-4">
                <FaAngleDown />
              </div>
            )}
          </div>
          {showCityDropdown && (
            <div className="flex flex-col space-y-2 mt-2">
              {cities.map((city, index) => (
                <button
                  key={index}
                  onClick={() => handleCitySelect(city)}
                  className="w-full bg-[#f7f3ea] text-[#821b1f] px-6 py-2 rounded-3xl hover:text-[#f7f3ea] hover:bg-[#b98a32] transition-all duration-300 whitespace-nowrap"
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Spacer */}
        <div className="h-4 lg:h-0"></div>

        {/* Facility Dropdown */}
        <div className="w-full lg:w-1/3">
          <div
            onMouseDown={() => { setShowIconFacility(false) }}
            onMouseUp={() => { setShowIconFacility(true) }}
            onMouseLeave={() => { setShowIconFacility(true) }}
            className="relative flex justify-center items-center text-[#f7f3ea] cursor-pointer shadow-md rounded-3xl px-4 py-2 bg-[#821b1f] hover:bg-[#f7f3ea] hover:text-[#821b1f] border border-[#f7f3ea]"
          >
            <span className="pointer-events-none">{getFacilityButtonText()}</span>

            {showIconFacility && (
              <div className="absolute right-4">
                <FaAngleDown />
              </div>
            )}
          </div>
          {availableFacilities[0] !== "Not Applicable" && (
            <div className="flex flex-col space-y-2 mt-2">
              {availableFacilities.map((facility, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedFacility(facility);
                  }}
                  className="w-full bg-[#f7f3ea] text-[#821b1f] px-6 py-2 rounded-3xl hover:text-[#f7f3ea] hover:bg-[#b98a32] transition-all duration-300 whitespace-nowrap"
                >
                  {facility}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Spacer */}
        <div className="h-4 lg:h-0"></div>

        {/* Book Button */}
        <div className="w-full lg:w-1/3">
          <button className="w-full bg-[#b98a32] text-[#f7f3ea] px-6 py-2 rounded-3xl hover:bg-[#f7f3ea] hover:text-[#821b1f] hover:border hover:border-[#821b1f] transition-all duration-300 whitespace-nowrap">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;