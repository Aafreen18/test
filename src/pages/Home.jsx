import Carousel from '../components/Carousel';
import HelpButtonModal from '../components/HelpButtonModal';
import BookAppointment from '../components/BookAppointment';
import MembershipCard from '../components/MembershipCard';

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

      <div className="bg-gray-50 flex items-center justify-center p-4">
        <Carousel slides={heroSlides} />
      </div>

      <BookAppointment />

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#444444]" style={{paddingTop: "200px", paddingBottom:" 100px"}}>
        <h1 className='text-white font-extrabold text-4xl text-center'>Limitless Consultations, Limitless Health</h1>
        <h1 className='text-[#b1b1b1] font-md text-2xl text-center mb-20'>Love for pets is a simple concept, so are our membership plans.</h1>

        <div className="flex max-w-7xl items-center justify-center mx-auto">
          <div className="">
            <MembershipCard time="3 Monthly" price="₹1599" />
          </div>

          <div className="">
            <MembershipCard time="6 Monthly" price="₹2599" />
          </div>

          <div className="">
            <MembershipCard time="Annual" price="₹4299" />
          </div>
          </div>
      </div>
    </>
  );
}

export default Home;