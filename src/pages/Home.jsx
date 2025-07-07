import PackageSection from '../components/PackageSection';
import Carousel from '../components/Carousel';
import HelpButtonModal from '../components/HelpButtonModal';
import BookAppointment from '../components/BookAppointment';
import MembershipSection from '../components/MembershipSection';

function Home() {
  const heroSlides = [
    {
      title: ['Veterinary care', <br key="1" />, 'with compassion'],
      description: 'Extensive experience meets exemplary service at DCC',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: ['Consult with DCC', <br key="1" />, 'Animal Hospital',<br key="2" />, ' Onground or Online'],
      description: 'We are focussed on your ease of reaching us for your pets health. Their health is our priority',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: ['Grooming services for', <br key="1" />, 'your pets, upkeep is', <br key="2" />, 'a key!'],
      description: 'Trained handlers and pet friendly products verified by our vets ensure a happy groomed pet',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <>  
      <HelpButtonModal />

      <div className="relative">
    
        <div className="bg-gray-50 flex items-center justify-center p-4">
          <Carousel slides={heroSlides} />
        </div>

       
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
          <BookAppointment />
        </div>

       
        <div className="relative"> 
          <MembershipSection />
        </div>
      </div>
  
      <PackageSection />

      <div className="py-2 bg-fuchsia-200" style={{height:"200px"}}></div>
    </>
  );
}

export default Home;