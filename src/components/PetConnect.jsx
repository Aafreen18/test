import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const PetConnect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const content = [
    {
      title: "PetConnect",
      description: "With DCC PetConnect you can manage your pet's health at your fingertips. Ease of booking appointments and rescheduling if needed.",
      cta: "Get the link to download the app",
      phoneContent: (
        <div className="p-4 bg-white rounded-lg h-full">
          <h3 className="text-lg font-bold mb-2">Welcome to PetConnect</h3>
          <p className="text-sm mb-4">Enter your phone number to join the family</p>
          <div className="flex flex-col space-y-4">
            <input 
              type="tel" 
              placeholder="Enter Phone Number" 
              className="border rounded p-2 text-sm"
            />
            <button className="bg-blue-600 text-white rounded p-2 text-sm font-medium">
              Join the family
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Appointments",
      description: "Manage all your pet's appointments in one place. View upcoming and past visits with ease.",
      cta: "Book your next appointment now",
      phoneContent: (
        <div className="p-4 bg-white rounded-lg h-full overflow-auto">
          <div className="flex border-b mb-2">
            <button className="px-4 py-2 font-medium border-b-2 border-blue-600 text-blue-600">Upcoming</button>
            <button className="px-4 py-2 text-gray-500">Past</button>
          </div>
          <div className="space-y-3">
            <div className="border rounded p-3">
              <div className="flex justify-between">
                <span className="font-medium">DCC Animal Hospital</span>
                <span className="text-sm text-gray-500">15 Sep 2021, 12:45 PM</span>
              </div>
              <p className="text-sm mt-1">Vaccination - Dr. Hemaret Kumar</p>
            </div>
            <div className="border rounded p-3">
              <div className="flex justify-between">
                <span className="font-medium">Clinic</span>
                <span className="text-sm text-gray-500">15 Sep 2021, 04:00 PM</span>
              </div>
              <p className="text-sm mt-1">Vaccinations for Frocely</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Vaccination Reminders",
      description: "Never miss an important vaccination with our automated reminders and tracking system.",
      cta: "Set up vaccination schedule",
      phoneContent: (
        <div className="p-4 bg-white rounded-lg h-full">
          <h3 className="text-lg font-bold mb-4">Vaccination Schedule</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">Rabies</span>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Due</span>
              </div>
              <p className="text-sm mt-1">Due on 15 Oct 2023</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">Distemper</span>
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Completed</span>
              </div>
              <p className="text-sm mt-1">Completed on 15 Sep 2021</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-rotate content on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile, content.length]);

  // Update active index based on scroll for desktop
  useEffect(() => {
    if (isMobile) return;
    
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionHeight = 1 / content.length;
      const newIndex = Math.min(
        content.length - 1,
        Math.floor(latest / sectionHeight)
      );
      setActiveIndex(newIndex);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, isMobile, content.length]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">DCC PetConnect</h1>
        
        {isMobile ? (
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-2xl font-bold mb-4">{content[activeIndex].title}</h2>
                  <p className="text-gray-600 mb-6">{content[activeIndex].description}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
                    {content[activeIndex].cta}
                  </button>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-6 space-x-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative w-64 h-[500px]">
              <div className="absolute inset-0 bg-gray-800 rounded-3xl p-2 shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
                <div className="h-full overflow-hidden rounded-2xl bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="h-full"
                    >
                      {content[activeIndex].phoneContent}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row gap-8 min-h-[calc(100vh-200px)]">
            {/* Scrollable content area */}
            <div 
              ref={containerRef} 
              className="md:w-1/2 relative z-10"
              style={{ height: `${content.length * 100}vh` }}
            >
              {content.map((item, index) => (
                <div 
                  key={index}
                  ref={el => contentRefs.current[index] = el}
                  className={`h-screen flex items-center justify-center sticky top-0 transition-all duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
                      {item.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fixed phone container */}
            <div className="md:w-1/2 flex justify-center items-center sticky top-0 h-screen">
              <div className="relative w-72 h-[500px]">
                <div className="absolute inset-0 bg-gray-800 rounded-3xl p-2 shadow-xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
                  <div className="h-full overflow-hidden rounded-2xl bg-gray-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                      >
                        {content[activeIndex].phoneContent}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetConnect;