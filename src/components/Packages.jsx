import React from 'react';

const Packages = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-red-200" style={{ paddingTop: "200px" }}>
        <div className="flex flex-col items-center text-center px-4 flex-1">
          <h1 className="text-white font-extrabold text-2xl md:text-6xl">
            Our Packages
          </h1>
          <p className="text-[#b1b1b1] mb-10 py-4">
            Choose from an extensive set of curated plans and select the one that fits your pet’s needs the best. Individual service options are also available.
          </p>
        </div>
        
        <div className="max-w-xs mx-auto rounded-t-3xl overflow-hidden shadow-lg bg-[#F3C623] p-6 font-sans">
            
            <div className="mb-4">
                <h2 className="text-2xl font-extrabold text-white">Petcare</h2>
            </div>
            
            <div className="mb-12">
                <p className="text-2xl font-bold text-white">Starting at ₹</p>
                <p className="text-2xl font-bold text-white">21,010</p>
                <p className="text-sm text-gray-100">* Prices Inclusive of GST</p>
            </div>
            
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">What you'll get</h3>
                <ul className="space-y-2 text-white">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Grooming sessions
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Body clippings
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Hydrotherapy sessions
                    </li>
                </ul>

                <div className="pt-16">
                    <button className="bg-black text-center font-bold hover:bg-white hover:text-black hover:border-black text-white py-2 px-4 rounded-3xl transition duration-200">
                        Choose
                    </button>
                </div>
            </div>
            

        </div>
    </div>
  );
};

export default Packages;