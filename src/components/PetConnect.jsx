import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PetConnect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const validatePhoneNumber = (number) => {
    const digitsOnly = number.replace(/\D/g, '');
    return digitsOnly.length >= 10;
  };

  const formatPhoneNumber = (number) => {
    const digitsOnly = number.replace(/\D/g, '');
    return digitsOnly.startsWith('+') ? digitsOnly : `+91${digitsOnly}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!phoneNumber) {
      setError('Please enter a phone number');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please include country code (e.g., +91 for India)');
      return;
    }

    const formattedNumber = formatPhoneNumber(phoneNumber);
    const message = `Download DCC PetConnect App:\n\nAndroid: https://play.google.com/store/apps/details?id=in.dcc.pets\niOS: https://apps.apple.com/in/app/dcc-petconnect/id1557541454`;
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const appDownloadContent = (
    <div className="md:space-y-6 w-full p-4">
      <h2 className="text-2xl font-bold" style={{ color: '#821b1f' }}>Get the PetConnect App</h2>
      <p className="text-gray-700">Download our app to manage your pet's health on the go. Available on both Android and iOS platforms.</p>
      
      <div className="flex flex-col md:space-y-4">
        <div className="bg-[#f7f3ea] p-4 rounded-lg">
          <h3 className="font-medium mb-2" style={{ color: '#821b1f' }}>Get the link via WhatsApp</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input 
              type="tel" 
              placeholder="Enter Phone Number with country code" 
              className="border rounded p-2 text-sm w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit"
              className="rounded p-2 text-sm font-medium transition-colors w-full"
              style={{ backgroundColor: '#821b1f', color: '#f7f3ea' }}
            >
              {isSubmitted ? "Link Sent!" : "Send App Link"}
            </button>
          </form>
        </div>
        
        <div className="bg-[#f7f3ea] md:p-4 p-2 rounded-lg">
          <h3 className="font-medium mb-2" style={{ color: '#821b1f' }}>Or download directly</h3>
          <div className="flex flex-col space-y-3">
            <a 
              href="https://play.google.com/store/apps/details?id=in.dcc.pets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded p-2 text-sm transition-colors"
              style={{ backgroundColor: '#821b1f', color: '#f7f3ea' }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
              Download on Google Play
            </a>
            <a 
              href="https://apps.apple.com/in/app/dcc-petconnect/id1557541454" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded p-2 text-sm transition-colors"
              style={{ backgroundColor: '#821b1f', color: '#f7f3ea' }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const content = [
    {
      title: "PetConnect",
      description: "With DCC PetConnect you can manage your pet's health at your fingertips. Ease of booking appointments and rescheduling if needed.",
      cta: "Get the link to download the app",
      phoneContent: appDownloadContent
    },
    {
      title: "Appointments",
      description: "Manage all your pet's appointments in one place. View upcoming and past visits with ease.",
      cta: "Book your next appointment now",
      phoneContent: (
        <div className="p-4 bg-[#f7f3ea] rounded-lg h-full overflow-auto">
          <div className="flex border-b mb-2">
            <button className="px-4 py-2 font-medium border-b-2" style={{ borderColor: '#b98a32', color: '#821b1f' }}>Upcoming</button>
            <button className="px-4 py-2 text-gray-500">Past</button>
          </div>
          <div className="space-y-3">
            <div className="border rounded p-3 bg-white">
              <div className="flex justify-between">
                <span className="font-medium">DCC Animal Hospital</span>
                <span className="text-sm text-gray-500">15 Sep 2021, 12:45 PM</span>
              </div>
              <p className="text-sm mt-1">Vaccination - Dr. Hemaret Kumar</p>
              <Link 
                to="/appointments" 
                className="inline-block mt-2 text-sm px-3 py-1 rounded"
                style={{ backgroundColor: '#b98a32', color: '#f7f3ea' }}
              >
                Schedule
              </Link>
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
        <div className="p-4 bg-[#f7f3ea] rounded-lg h-full">
          <h3 className="text-lg font-bold mb-4" style={{ color: '#821b1f' }}>Vaccination Schedule</h3>
          <div className="space-y-4">
            <div className="p-3 rounded" style={{ backgroundColor: '#f0e6d2' }}>
              <div className="flex justify-between items-center">
                <span className="font-medium">Rabies</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#821b1f', color: '#f7f3ea' }}>Due</span>
              </div>
              <p className="text-sm mt-1">Due on 15 Oct 2023</p>
              <Link 
                to="/vaccinations" 
                className="inline-block mt-2 text-sm px-3 py-1 rounded"
                style={{ backgroundColor: '#b98a32', color: '#f7f3ea' }}
              >
                Schedule
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, content.length]);

  useEffect(() => {
    if (isMobile) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionHeight = 1 / content.length;
      setActiveIndex(Math.min(content.length - 1, Math.floor(latest / sectionHeight)));
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMobile, content.length]);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]" style={{ backgroundColor: '#821b1f' }}>
      <div className="w-full px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">DCC PetConnect</h1>
        
        {isMobile ? (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: '#f0e6d2' }}
                >
                  {activeIndex === 0 ? (
                    appDownloadContent
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-4" style={{ color: '#821b1f' }}>{content[activeIndex].title}</h2>
                      <p className="text-gray-700 mb-6">{content[activeIndex].description}</p>
                      <Link 
                        to={activeIndex === 1 ? "/appointments" : "/telehealth"}
                        className="inline-block px-6 py-2 rounded-md font-medium"
                        style={{ backgroundColor: '#b98a32', color: '#f7f3ea' }}
                      >
                        {content[activeIndex].cta}
                      </Link>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-6 space-x-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#f7f3ea]' : 'bg-[#b98a32]'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative w-full max-w-xs mx-auto h-[500px]">
              <div className="absolute inset-0 rounded-3xl p-2 shadow-xl" style={{ backgroundColor: '#b98a32' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 rounded-b-xl" style={{ backgroundColor: '#b98a32' }}></div>
                <div className="h-full overflow-hidden rounded-2xl bg-[#f7f3ea]">
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
          <div className="relative flex flex-col md:flex-row gap-8 min-h-[calc(100vh-200px)] max-w-7xl mx-auto">
            <div 
              ref={containerRef} 
              className="md:w-1/2 relative z-10"
              style={{ height: `${content.length * 100}vh` }}
            >
              {content.map((item, index) => (
                <div 
                  key={index}
                  className={`h-screen flex items-center justify-center sticky top-0 transition-all duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="p-6 rounded-lg w-full max-w-md mx-auto" style={{ backgroundColor: '#f0e6d2' }}>
                    {index === 0 ? (
                      appDownloadContent
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: '#821b1f' }}>{item.title}</h2>
                        <p className="text-gray-700 mb-6">{item.description}</p>
                        <Link 
                          to={index === 1 ? "/appointment" : "/telehealth"}
                          className="inline-block px-6 py-2 rounded-md font-medium"
                          style={{ backgroundColor: '#b98a32', color: '#f7f3ea' }}
                        >
                          {item.cta}
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="md:w-1/2 flex justify-center items-center sticky top-0 h-screen">
              <div className="relative w-72 h-[500px]">
                <div className="absolute inset-0 rounded-3xl p-2 shadow-xl" style={{ backgroundColor: '#b89a32' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 rounded-b-xl" style={{ backgroundColor: '#b98a32' }}></div>
                  <div className="h-full overflow-hidden rounded-2xl bg-[#f7f3ea]">
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