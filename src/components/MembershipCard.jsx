import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const MembershipCard = ({ time, price, hoverColor }) => {
  return (
    <div className={`max-w-xs mx-auto bg-black rounded-3xl shadow-xl overflow-hidden border my-4 px-4 ${hoverColor}`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">
          {time}<br /> Membership
        </div>
        <p className="text-white text-3xl font-semibold mb-4 border-b pb-2 border-gray-400 ">{price}</p>
        
        <p className="text-gray-200 text-sm mb-4">
          Purchase possible on DCC PetConnect App
        </p>
        <p className="text-gray-300 text-sm mb-4">
          (GST Included + T&C Apply)
        </p>
        
        <div className="mb-4 text-white">
          <h3 className="font-semibold text-white mb-2">Inclusive of:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2"><IoMdCheckmarkCircleOutline /></span>
              <span className="text-gray-200">10% off on Pharmacy</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2"><IoMdCheckmarkCircleOutline /></span>
              <span className="text-gray-200">Free Consultation</span>
            </li>
            <li className="flex items-baseline">
              <span className="mr-2 "><IoMdCheckmarkCircleOutline /></span>
              <span className="text-gray-200">15% off on Petcare & Medical services</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2"><IoMdCheckmarkCircleOutline /></span>
              <span className="text-gray-200">Messaging access</span>
            </li>
          </ul>
        </div>
        
        <div className="pt-4">
          <button className="bg-white font-bold hover:bg-purple-950 hover:text-white hover:border-white text-black py-2 px-4 rounded-3xl transition duration-200">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;