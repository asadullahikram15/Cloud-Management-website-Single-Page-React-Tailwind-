import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import AllInOneCard from "./common/AllInOneCard";

const AllinOne = () => {
  return (
    <>
      <div name='platform' className="w-full my-22">
        {/* header div start */}
        <div className="max-w-[1240px] mx-auto px-2 py-20">
          <h2 className="text-5xl font-bold text-center">
            All-in-One platform
          </h2>
          <p className="text-2xl py-8 text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            perspiciatis assumenda ullam tenetur soluta dolorem illo impedit
            esse suscipit veritatis!
          </p>

          {/* section start */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {/* card 1 */}
            <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>

            {/* card 1 */}
            
            {/* card2 */}
            <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card2 */}

              {/* card3 */}
              <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card3 */}

             {/* card4 */}
             <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card4 */}


            {/* card5 */}
            <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card5 */}

             {/* card6 */}
             <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card6 */}

             {/* card7 */}
             <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card7 */}

             {/* card8 */}
             <AllInOneCard title='Notifications' para=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  iste nesciunt perferendis ut nam nulla ipsa laborum odit aut
                  quae.'/>
            {/* card8 */}


          </div>
          {/* section start */}
        </div>
                {/* header div start */}
      </div>
    </>
  );
};

export default AllinOne;
