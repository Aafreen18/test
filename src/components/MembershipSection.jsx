import { motion } from "framer-motion";
import MembershipCard from '../components/MembershipCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { client } from "../lib/sanity";

const MembershipSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "membership"] | order(_createdAt asc)`);
      setMemberships(data);
    };

    fetchData();
  }, []);


  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? memberships.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === memberships.length - 1 ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], 
      },
    },
  };

  
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#f7f3ea]" style={{ paddingTop: "200px", paddingBottom: "100px" }}>

      {/* Header Section */}
      <div className="flex flex-row items-center justify-center gap-4 py-4 px-2 flex-wrap max-w-7xl mx-auto">
        <div className="p-4 justify-center w-full flex sm:w-auto">
          <img
            src="/logo.png"
            alt="Example"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center px-4 flex-1">
          <h1 className="text-[#821b1f] font-extrabold text-2xl md:text-4xl">
            Limitless Consultations, Limitless Health
          </h1>
          <h2 className="text-[#5e3a1f] font-medium text-lg sm:text-2xl mb-10">
            Love for pets is a simple concept, so are our membership plans.
          </h2>
        </div>

        <div className="p-4 justify-center w-auto hidden lg:flex">
          <img
            src="/logo.png"
            alt="Example"
            className="w-40 h-40 object-cover"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center relative">
          <div className="relative w-full flex justify-center items-center">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-0 p-2 bg-[#821b1f] text-[#f7f3ea] rounded-full"
            >
              <FaArrowLeft />
            </button>

            {/* Animated Card */}
            {memberships.length > 0 && (
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center"
              >
                <MembershipCard
                  time={memberships[currentIndex].time}
                  price={memberships[currentIndex].price}
                  hoverColor={memberships[currentIndex].hoverColor}
                  benefits={memberships[currentIndex].benefits}
                />
              </motion.div>
            )}


            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-0 p-2 bg-[#821b1f] text-[#f7f3ea] rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Overlapping cards for medium and up screens */}
        <div className="hidden md:flex items-center justify-center mt-10 overflow-hidden">
          <motion.div
            className="flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            {memberships.map((m, i) => {
              const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`z-${10 + i} ${i !== 0 ? "-ml-6" : ""}`}
                  whileHover={{
                    zIndex: 20,
                    transition: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <MembershipCard
                    time={m.time}
                    price={m.price}
                    hoverColor={m.hoverColor}
                    dimmed={isDimmed}
                    benefits={m.benefits}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;