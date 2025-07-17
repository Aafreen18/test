import PackageSection from '../components/PackageSection';
import Carousel from '../components/Carousel';
import HelpButtonModal from '../components/HelpButtonModal';
import BookAppointment from '../components/BookAppointment';
import MembershipSection from '../components/MembershipSection';
import Service from '../components/Service';
import AppointmentSection from '../components/AppointmentSection';
import DoctorsMeet from '../components/DoctorsMeet';
import PetConnect from '../components/PetConnect';
import Testimonial from '../components/Testimonial';
import PressAndMedia from '../components/PressAndMedia';

import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

function Home() {
  const [heroSlides, setHeroSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const data = await client.fetch(`
        *[_type == "heroSlide"]{
          _id,
          title,
          description,
          imageUrl,
          "image": image.asset->url
        }
      `);


      // Convert Portable Text (title) to React fragments
      const transformed = data.map((slide, index) => ({
        ...slide,
        title: slide.title?.map((block, i) => (
          <React.Fragment key={i}>
            {block.children?.map(child => child.text).join('')}
            {i !== slide.title.length - 1 && <br />}
          </React.Fragment>
        )),
        image: slide.imageUrl || slide.image // Use imageUrl if available
      }));

      setHeroSlides(transformed);
    };

    fetchSlides();
  }, []);

  return (
    <>  
      <HelpButtonModal />

      <div className="relative">
    
        {heroSlides.length > 0 && (
          <div className="bg-gray-50 flex items-center justify-center p-4">
            <Carousel slides={heroSlides} />
          </div>
        )}

       
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
          <BookAppointment />
        </div>

       
        <div className="relative"> 
          <MembershipSection />
        </div>
      </div>
  
      <PackageSection />

      <Service />

      <AppointmentSection/>

      <DoctorsMeet />

      <PetConnect />

      <Testimonial />

      <PressAndMedia />
    </>
  );
}

export default Home;