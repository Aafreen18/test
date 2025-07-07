import { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Packages from '../components/Packages';

const PackageSection = () => {
  const cardData = [
    { 
      id: 1,
      title: ['Kitten', <br key="1" />, 'Care'],
      price: "12,170",
      backgroundColor: "#C46200",
      imageUrl: "/cat3R.png", 
      height: 450, 
      features: ["Vaccine shots", "Unlimited nail trims", "Deworming"],
      buttonPaddingBottom: "3rem" 
    },
    { 
      id: 2,
      title: ['Puppy', <br key="1" />, 'Care'],
      price: "15,370",
      backgroundColor: "#9FB3DF",
      imageUrl: "/cat1R.png",  
      height: 500, 
      features: ["Vaccine shots", "Unlimited nail trims", "Deworming"],
      buttonPaddingBottom: "4rem" 
    },
    { 
      id: 3, 
      title: "Petcare",
      price: "21,010",
      backgroundColor: "#FF8A8A",
      imageUrl: "/cat2R.png", 
      height: 550, 
      features: ["Grooming Sessions", "Body Clippings", "Hydrotherapy sessions"],
      buttonPaddingBottom: "5rem" 
    },
    { 
      id: 4, 
      title: "Adult Dog",
      price: "12,240",
      backgroundColor: "#F3C623",
      imageUrl: "/dogRR.png", 
      height: 600, 
      features: ["Vaccine shots", "Health Construction", "Ear cleaning"],
      buttonPaddingBottom: "6rem" 
    },
    { 
      id: 5, 
      title: "Adult Cat",
      price: "10,470",
      backgroundColor: "#87CEEB",
      imageUrl: "/cat2R.png", 
      height: 550, 
      features: ["Vaccine shots", "Unlimited nail trims", "Deworming"],
      buttonPaddingBottom: "5rem" 
    },
    { 
      id: 6,
      title: "Grooming",
      price: "14,640",
      backgroundColor: "#DB8DD0",
      imageUrl: "/cat1R.png",  
      height: 500,
      features: ["Basic baths", "Massages", "Basic grooming"], 
      buttonPaddingBottom: "4rem" 
    },
    { 
      id: 7, 
      title: "Boarding",
      price: "26,560",
      backgroundColor: "#DF9755",
      imageUrl: "/cat3R.png", 
      height: 450, 
      features: ["Grooming Sessions", "15 Days per year", "Hydrotherapy sessions"],
      buttonPaddingBottom: "3rem" 
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const middleIndex = Math.floor(cardData.length / 2);
  const carouselRef = useRef(null);
  const desktopRef = useRef(null);
  const isInView = useInView(desktopRef, { once: true, margin: "-100px" });

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-black pt-20">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-white font-extrabold text-2xl md:text-6xl">Our Packages</h1>
        <p className="text-[#b1b1b1] mb-10 py-4 max-w-2xl">
          Choose from an extensive set of curated plans and select the one that fits your pet's needs the best. Individual service options are also available.
        </p>
      </div>

      {/* Desktop View (lg and up) */}
      <div ref={desktopRef} className="hidden lg:block max-w-7xl w-full mx-auto h-[650px]">
        <div className="flex justify-center items-end mt-12 h-full">
          {cardData.map((card, index) => {
            const offset = (index - middleIndex) * 200;
            const isHovered = index === hoveredIndex;
            const zIndex = isHovered ? 999 : 100 - Math.abs(index - middleIndex);
            const dimmed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={card.id}
                className="absolute transition-transform duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  zIndex,
                }}
                initial={{ 
                  y: 100, 
                  x: index === middleIndex ? 0 : 0, 
                  opacity: 0 
                }}
                animate={isInView ? { 
                  y: 0, 
                  x: offset, 
                  opacity: 1 
                } : { 
                  y: 100, 
                  x: index === middleIndex ? 0 : 0, 
                  opacity: 0 
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Packages
                  title={card.title}
                  price={card.price}
                  backgroundColor={card.backgroundColor}
                  imageUrl={card.imageUrl}
                  height={card.height}
                  buttonPaddingBottom={card.buttonPaddingBottom}
                  features={card.features}
                  dimmed={dimmed}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet Carousel View (lg and down) */}
      <div className="lg:hidden max-w-7xl w-full mx-auto px-4 relative">
        <div className="relative overflow-hidden mt-12">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {cardData.map((card, index) => (
              <div 
                key={card.id} 
                className="w-full flex-shrink-0 flex justify-center px-2 pt-4" 
              >
                <Packages
                  title={card.title}
                  price={card.price}
                  backgroundColor="#F3C623"
                  imageUrl={card.imageUrl}
                  height="5rem"
                  buttonPaddingBottom="5rem"
                  features={card.features}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Adjusted positioning to be closer to cards */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 z-10"
          aria-label="Previous package"
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 z-10"
          aria-label="Next package"
        >
          <FiChevronRight className="text-white text-2xl" />
        </button>

      </div>
    </div>
  );
};

export default PackageSection;