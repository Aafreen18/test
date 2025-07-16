import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const MembershipCard = ({ time, price, hoverColor, dimmed, benefits }) => {
  return (
    <div 
      className={`max-w-xs mx-auto bg-[#821b1f] rounded-3xl shadow-xl overflow-hidden my-4 px-4 transition-all duration-300 ${hoverColor}`}
      style={dimmed ? { backgroundColor: "#5e3a1f", opacity: 0.8 } : {}}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#f7f3ea]">
          {time}<br /> Membership
        </div>
        <p className="text-[#f7f3ea] text-3xl font-semibold mb-4 border-b pb-2 border-[#b98a32]">{price}</p>
        
        <p className="text-[#f7f3ea] text-sm mb-4 opacity-80">
          Purchase possible on DCC PetConnect App
        </p>
        <p className="text-[#f7f3ea] text-sm mb-4 opacity-70">
          (GST Included + T&C Apply)
        </p>
        
        <div className="mb-4 text-[#f7f3ea]">
          <h3 className="font-semibold mb-2">Inclusive of:</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-[#b98a32]">
                  <IoMdCheckmarkCircleOutline />
                </span>
                <span className="text-gray-200">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4">
          <button className="w-full bg-[#b98a32] font-bold hover:bg-[#f7f3ea] hover:text-[#821b1f] text-[#f7f3ea] py-2 px-4 rounded-3xl transition duration-200 border border-transparent hover:border-[#821b1f]">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;