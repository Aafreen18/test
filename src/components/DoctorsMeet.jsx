import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DoctorsMeet = () => {
  // Sample images - replace with your actual image URLs
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Beautiful landscape 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', alt: 'Beautiful landscape 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', alt: 'Beautiful landscape 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop', alt: 'Beautiful landscape 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop', alt: 'Beautiful landscape 5' },
    { id: 6, url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop', alt: 'Beautiful landscape 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  // Get visible images count based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount();
      setVisibleCount(newVisibleCount);
      setIsSmallDevice(newVisibleCount === 1);
      
      // Disable autoplay for small devices
      if (newVisibleCount === 1) {
        setIsAutoPlaying(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality (only for medium and large devices)
  useEffect(() => {
    if (!isAutoPlaying || isSmallDevice) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = images.length - visibleCount;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCount, images.length, isSmallDevice]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = images.length - visibleCount;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  }, [visibleCount, images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = images.length - visibleCount;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [visibleCount, images.length]);

  // Handle mouse enter/leave for auto-play (only for medium and large devices)
  const handleMouseEnter = () => !isSmallDevice && setIsAutoPlaying(false);
  const handleMouseLeave = () => !isSmallDevice && setIsAutoPlaying(true);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden p-6" style={{ backgroundColor: '#f7f3ea' }}>
      {/* Header Section */}
      <div className="text-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#821b1f' }}
        >
          Excellence in Medical Care.<br/>Empathy with the Pets.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#b98a32' }}
        >
          Our team consists of renowned specialists and adept surgeons who care about keeping your pet healthy and well.
        </motion.p>
      </div>

      {/* Carousel Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: '#821b1f' }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          {/* Images Container */}
          <div className="flex-1 overflow-hidden rounded-2xl shadow-2xl">
            <div className={`relative ${isSmallDevice ? 'h-80' : 'h-64 md:h-80 lg:h-96'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex gap-2 p-2"
                >
                  {images.slice(currentIndex, currentIndex + visibleCount).map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex-1 relative overflow-hidden rounded-xl group"
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: '#821b1f' }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: images.length - visibleCount + 1 }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'scale-125' : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: index === currentIndex ? '#821b1f' : '#b98a32',
                opacity: index === currentIndex ? 1 : 0.6
              }}
            />
          ))}
        </div>

        {/* Auto-play indicator (only for medium and large devices) */}
        {!isSmallDevice && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm" style={{ color: '#b98a32' }}>
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'animate-pulse' : ''}`} 
                  style={{ backgroundColor: isAutoPlaying ? '#821b1f' : '#b98a32' }} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DoctorsMeet;