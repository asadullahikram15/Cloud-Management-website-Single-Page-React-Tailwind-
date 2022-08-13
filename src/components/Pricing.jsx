import React from "react";
import PriceCard from "./common/PriceCard";

const Pricing = () => {
  return (
    <>
      <div name='pricing' className="w-full text-white my-20">
        <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

        <div className="max-w-[1240px] mx-auto py-12">
          {/* DETAILS */}
          <div className="text-center py-8 text-slate-300">
            <h2 className="text-3xl uppercase">Pricing</h2>
            <h3 className="text-5xl font-bold text-white py-8">
              The Right Price For your Research
            </h3>
            <p className="text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam rerum doloribus delectus repellat deleniti aspernatur!
            </p>
          </div>
          {/* DETAILS */}

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-2 gap-y-16 px-4 pt-12 sm:pt-20">
            {/* price card 1 */}
            <PriceCard package='Gold' price='49' plan='month' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, placeat!' item1='Lorem ,ispum
                dolor.' item2='Lorem ,ispum
                dolor.' item3='Lorem ,ispum
                dolor.' item4='Lorem ,ispum
                dolor.' item5='Lorem ,ispum
                dolor.'/>
            {/* price card 1 */}


            {/* price card 2 */}
            <PriceCard package='Silver' price='149' plan='month' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, placeat!' item1='Lorem ,ispum
                dolor.' item2='Lorem ,ispum
                dolor.' item3='Lorem ,ispum
                dolor.' item4='Lorem ,ispum
                dolor.' item5='Lorem ,ispum
                dolor.'/>
            {/* price card 2 */}


            {/* price card 3 */}
            <PriceCard package='platinum' price='249' plan='month' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, placeat!' item1='Lorem ,ispum
                dolor.' item2='Lorem ,ispum
                dolor.' item3='Lorem ,ispum
                dolor.' item4='Lorem ,ispum
                dolor.' item5='Lorem ,ispum
                dolor.'/>
            {/* price card 3 */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
