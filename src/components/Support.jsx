import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import SupportImg from "../assets/images/support.jpg";
import SupportCard from "./common/SupportCard";

const Support = () => {
  return (
    <>
      <div name='support' className="w-full mt-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img
            src={SupportImg}
            alt=""
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 text-salte-300 uppercase text-center">
              Support
            </h2>
            <h2 className="text-5xl font-bold py-6 text-center">
              Finding the right team.
            </h2>
            <p className="py-4 text-3xl text-slate-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus provident suscipit vero adipisci veritatis nesciunt
              cumque fugit temporibus facilis voluptatem?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            {/* card 1 */}
            <SupportCard title='Sales' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  ex!'/>
            {/* card 1 */}

            {/* card 2 */}
            <SupportCard title='Technical Support' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  ex!'/>              
            {/* card 2 */}

            {/* card 3 */}
            <SupportCard title='Media Inquiries' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  ex!'/>   
            {/* card 3 */}

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
