import Carousel from '../components/Carousel';
import HelpButtonModal from '../components/HelpButtonModal';
import BookAppointment from '../components/BookAppointment';
import MembershipSection from '../components/MembershipSection';
import Packages from '../components/Packages';

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
  
  const cardData = [
  { id: 1,
    title: ['Kitten', <br key="1" />, 'Care'],
    price: "12,170",
    backgroundColor: "#C46200",
    imageUrl: "/cat3R.png", 
    height: 450, 
    features: ["Vaccine shots", "Unlimited nail trims", "Deworming"],
    buttonPaddingBottom: "3rem" 
  },
  { id: 2,
    title:['Puppy', <br key="1" />, 'Care'],
    price: "15,370",
    backgroundColor: "#9FB3DF",
    imageUrl: "/cat1R.png",  
    height: 500, 
    features: ["Vaccine shots", "Unlimited nail trims", "Deworming"],
    buttonPaddingBottom: "4rem" 
  },
  { id: 3, 
    title: "Petcare",
    price: "21,010",
    backgroundColor: "#FF8A8A",
    imageUrl: "/cat2R.png", 
    height: 550, 
    features: ["Grooming Sessions", "Body Clippings", "Hydrotherapy sessions"],
    buttonPaddingBottom: "5rem" 
  },
  { id: 4, 
    title: "Adult Dog",
    price: "12,240",
    backgroundColor: "#F3C623",
    imageUrl: "/dogRR.png", 
    height: 600, 
    features: ["Vaccine shots", "Health Construction", "Ear cleaning"],
    buttonPaddingBottom: "6rem" 
  }, // middle - tallest
  { id: 5, 
    title: "Adult Cat",
    price: "10,470",
    backgroundColor: "#87CEEB",
    imageUrl: "/cat2R.png", 
    height: 550, 
    features: ["Vaccine shots", "Unlimited nail trims", "Deworming"],
    buttonPaddingBottom: "5rem" 
  },
  { id: 6,
    title: "Grooming",
    price: "14,640",
    backgroundColor: "#DB8DD0",
    imageUrl: "/cat1R.png",  
    height: 500,
    features: ["Basic baths", "Massages", "Basic grooming"], 
    buttonPaddingBottom: "4rem" 
  },
  { id: 7, 
    title: "Boarding",
    price: "26,560",
    backgroundColor: "#DF9755",
    imageUrl: "/cat3R.png", 
    height: 450, 
    features: ["Grooming Sessions", "15 Days per year", "Hydrotherapy sessions"],
    buttonPaddingBottom: "3rem" 
  },
];

const middleIndex = Math.floor(cardData.length / 2);


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

    
  
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-black pt-20">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-white font-extrabold text-2xl md:text-6xl">Our Packages</h1>
        <p className="text-[#b1b1b1] mb-10 py-4 max-w-2xl">
          Choose from an extensive set of curated plans and select the one that fits your pet’s needs the best. Individual service options are also available.
        </p>
      </div>

      <div className="max-w-7xl w-full mx-auto flex justify-center items-end mt-12 h-[650px]">
        {cardData.map((card, index) => {
          const offset = (index - middleIndex) * 120; // horizontal overlap
          const zIndex = 100 - Math.abs(index - middleIndex); // middle is top
          return (
            <div
              key={card.id}
              className="absolute transition-transform duration-300"
              style={{
                transform: `translateX(${offset}px)`,
                zIndex,
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
              />
            </div>
          );
        })}
      </div>
    </div>

      <div className="py-2 bg-fuchsia-200" style={{height:"200px"}}></div>
    </>
  );
}

export default Home;