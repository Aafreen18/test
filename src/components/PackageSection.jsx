import { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Packages from '../components/Packages';
import { client, urlFor } from '../lib/sanity'; 

const PackageSection = () => {
  const [cardData, setCardData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const desktopContainerRef = useRef(null);
  const isInView = useInView(desktopContainerRef, { once: false, margin: "0px" });

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await client.fetch(`*[_type == "package"] | order(_createdAt asc)`);
      const transformed = data.map((item, idx) => ({
        id: item._id || idx,
        title: item.title.includes('<br') ? item.title : item.title.split('\\n').map((t, i) => i === 1 ? [<br key={i} />, t] : t),
        price: item.price,
        backgroundColor: item.backgroundColor,
        imageUrl: urlFor(item.imageUrl).url(),
        height: item.height,
        buttonPaddingBottom: item.buttonPaddingBottom,
        features: item.features,
      }));
      setCardData(transformed);
    };

    fetchPackages();
  }, []);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#821b1f] pt-20 overflow-hidden">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-[#b98a32] font-extrabold text-2xl md:text-6xl">Our Packages</h1>
        <p className="text-[#f7f3ea] mb-10 py-4 max-w-2xl">
          Choose from an extensive set of curated plans and select the one that fits your pet's needs the best. Individual service options are also available.
        </p>
      </div>

      {/* Desktop View (lg and up) */}
      <div ref={desktopContainerRef} className="hidden lg:block w-full">
        {cardData.length > 0 && (
          <div className="max-w-7xl w-full mx-auto h-[650px] relative">
            <div className="flex justify-center items-end h-full w-full">
              {cardData.map((card, index) => {
                const middleIndex = Math.floor(cardData.length / 2);
                const offset = (index - middleIndex) * 120;
                const isHovered = index === hoveredIndex;
                const zIndex = isHovered ? 999 : 100 - Math.abs(index - middleIndex);
                const dimmed = hoveredIndex !== null && !isHovered;

                return (
                  <motion.div
                    key={card.id}
                    className="absolute bottom-0"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ 
                      zIndex,
                      x: offset,
                    }}
                    initial={{ y: 400, opacity: 0 }}
                    animate={
                      isInView
                        ? { y: 0, opacity: 1 }
                        : { y: 400, opacity: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 0.77, 0.47, 0.97],
                      delay: index * 0.1
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
        )}
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
                  backgroundColor="#b98a32"
                  imageUrl={card.imageUrl}
                  height="5rem"
                  buttonPaddingBottom="5rem"
                  features={card.features}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
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