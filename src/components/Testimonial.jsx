import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      content: "Outstanding quality and attention to detail. They delivered exactly what we needed, on time and within budget.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      content: "The innovative approach and creative solutions provided exceeded our expectations. Highly recommend their services.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Thompson",
      role: "CTO",
      company: "DataFlow Inc",
      content: "Exceptional technical expertise and customer service. They understood our complex requirements perfectly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Lisa Wang",
      role: "Designer",
      company: "Creative Studio",
      content: "Their creative vision and execution is unmatched. Every project is handled with care and professionalism.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Robert Martinez",
      role: "Operations Manager",
      company: "Global Solutions",
      content: "Reliable, efficient, and always delivers quality results. They've become an essential part of our operations.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(350);
  const [visibleCards, setVisibleCards] = useState(3);
  const [offset, setOffset] = useState(0);
  const speed = 2.5; // pixels per frame
  const gap = 32;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);

        if (width >= 1024) {
          setVisibleCards(3);
          setCardWidth(Math.min(400, (width - gap * 2) / 3));
        } else if (width >= 768) {
          setVisibleCards(2);
          setCardWidth(Math.min(500, (width - gap) / 2));
        } else {
          setVisibleCards(1);
          setCardWidth(width - 40);
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!isAutoPlaying || !cardWidth) return;

    let animationId;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setOffset(prev => {
        const totalWidth = (cardWidth + gap) * testimonials.length;
        let newOffset = prev - (speed * delta / 16); // move to right

        // wrap around to loop
        if (Math.abs(newOffset) >= totalWidth) {
          newOffset += totalWidth;
        }

        return newOffset;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isAutoPlaying, cardWidth, testimonials.length]);

  const TestimonialCard = ({ testimonial, index }) => {
    const totalWidth = (cardWidth + gap) * testimonials.length;
    const position = (index * (cardWidth + gap) + offset % totalWidth);
    const xPos = position > containerWidth ? position - totalWidth : position;

    return (
      <motion.div
        key={`${testimonial.id}-${index}`}
        className="bg-[#f7f3ea] rounded-2xl shadow-lg p-6 border border-[#821b1f] hover:shadow-xl transition-shadow duration-300 flex-shrink-0 absolute top-0"
        style={{
          width: `${cardWidth}px`,
          transform: `translateX(${xPos}px)`,
          marginRight: `${gap}px`,
        }}
        onHoverStart={() => setIsAutoPlaying(false)}
        onHoverEnd={() => setIsAutoPlaying(true)}
      >
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-[#821b1f]">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-xs text-[#b98a32] font-medium">{testimonial.company}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex text-[#b98a32] mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
        </div>

        <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
      </motion.div>
    );
  };

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden py-16 bg-[#b98a32]">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#f7f3ea] mb-4">Happy Pets make <br/> Happy Families</h2>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[400px] overflow-hidden"
        >
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`card-${testimonial.id}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              isAutoPlaying
                ? 'bg-[#821b1f] text-[#f7f3ea] hover:bg-[#6a1519]'
                : 'bg-[#f7f3ea] text-[#821b1f] hover:bg-[#e8e4db]'
            }`}
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;