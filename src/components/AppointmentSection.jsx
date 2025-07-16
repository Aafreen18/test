import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";

const Service = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "appointmentSection"][0]`)
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <div className="w-screen lg:h-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {data.backgroundImage && (
          <img
            src={urlFor(data.backgroundImage).url()}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full flex flex-row items-end justify-between pt-20">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-white mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
            {data.description}
          </p>
          <button className="bg-[#821b1f] hover:bg-white text-center text-white hover:text-[#b98a32] font-semibold py-3 px-8 rounded-3xl w-fit text-lg transition duration-300 transform hover:scale-105 mb-10">
            {data.buttonText}
          </button>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={urlFor(data.featureImage).url()}
            alt="Feature"
            className="max-w-full h-auto md:max-w-md lg:max-w-lg self-end"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
