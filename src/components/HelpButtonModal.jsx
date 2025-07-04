import React, { useState } from 'react';
import { FaQuestionCircle, FaTimes } from 'react-icons/fa';
import { LiaDogSolid } from "react-icons/lia";

export default function HelpButtonModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed top-60 right-0 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-green-500 text-white h-12 p-3 hover:bg-green-600 transition-all duration-300 overflow-hidden flex items-center justify-center ${
            isOpen ? 'w-20' : 'w-12'
          }`}
        >
          <FaQuestionCircle className="w-full h-full" />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-60 right-0 z-40"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[400px] max-w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            {/* Image and Content */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src="./Vet_doc.png"
                  alt="Help Visual"
                  className="w-full h-auto rounded-md object-cover bg-white"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                    <LiaDogSolid className="rounded-full p-2 bg-green-500 text-white" size={45} />
                    <span className="text-green-600 font-semibold text-lg">Dogs</span>
                </div>

                <h2 className="text-xl font-semibold">We are here <br /> for you!</h2>

                <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-all duration-300 whitespace-nowrap">
                    Know More
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
