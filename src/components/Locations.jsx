import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Locations = () => {
  const locations = [
    {
      icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />,
      items: [
        {
          text: "Registered Address: WeWork BlueOne Square, 246 Phase IV, Udyog Vihar, Industrial Complex Dundahera, Gurgaon, India 122016",
          map: "https://maps.google.com/?q=WeWork+BlueOne+Square,+246+Phase+IV,+Udyog+Vihar,+Industrial+Complex+Dundahera,+Gurgaon+122016",
          icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
        }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />,
      items: [
        {
          text: "Gurugram: Jagdamba Farm, Carterpuri Marg, Sector 23A, Gurugram – 122016",
          map: "https://maps.google.com/?q=Jagdamba+Farm,+Carterpuri+Marg,+Sector+23A,+Gurugram+122016",
          icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "Gurugram Hospital: 09:00 AM - 09:00 PM",
          isTime: true,
          icon: <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "Gurugram Petcare: 09:00 AM - 08:00 PM",
          isTime: true,
          icon: <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
        }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />,
      items: [
        {
          text: "New Delhi: E-556, Greater Kailash Part-II, New Delhi – 110048",
          map: "https://maps.google.com/?q=E-556,+Greater+Kailash+Part-II,+New+Delhi+110048",
          icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "New Delhi: 1A Masjid Moth South Extension 2 Siri Fort Road, opp Ansal Plaza, New Delhi 110049",
          map: "https://maps.google.com/?q=1A+Masjid+Moth+South+Extension+2+Siri+Fort+Road,+opp+Ansal+Plaza,+New+Delhi+110049",
          icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "New Delhi, Greater Kailash: 10:00 AM - 07:00 PM",
          isTime: true,
          icon: <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "New Delhi, Uday Park: 10:00 AM - 07:00 PM",
          isTime: true,
          icon: <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
        }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />,
      items: [
        {
          text: "Jaipur: IDB, Basement, FS 6 Gayatri Nagar, Maharani Farm, Durgapura, Jaipur 302018",
          map: "https://maps.google.com/?q=IDB,+Basement,+FS+6+Gayatri+Nagar,+Maharani+Farm,+Durgapura,+Jaipur+302018",
          icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "Jaipur Hospital: 10:00AM - 07:00PM, Tuesdays closed",
          isTime: true,
          icon: <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "Rewari: DCC Animal Hospital Main Bharawas Road Sahjanpur Road Rewari 123401",
          map: "https://maps.google.com/?q=DCC+Animal+Hospital+Main+Bharawas+Road+Sahjanpur+Road+Rewari+123401",
          icon: <FaMapMarkerAlt className="text-[#821b1f] mr-2 mt-0.5 flex-shrink-0" />
        },
        {
          text: "Rewari Hospital: 08:00AM - 08:00PM",
          isTime: true,
          icon: <FaClock className="text-[#b98a32] mr-2 mt-0.5 flex-shrink-0" />
        }
      ]
    }
  ];

  return (
    <div className="bg-[#f7f3ea] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
        {locations.map((location, index) => (
          <div key={index} className="space-y-3">
            <div className="space-y-2">
              {location.items.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  {item.icon}
                  {item.map ? (
                    <a
                      href={item.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#821b1f] text-sm hover:text-[#b98a32] hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className={`text-sm ${item.isTime ? "text-[#b98a32]" : "text-[#821b1f]"}`}>
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="max-w-7xl mx-auto border-[#821b1f] border-t" />
    </div>
  );
};

export default Locations;