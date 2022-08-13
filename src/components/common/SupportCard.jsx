import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

const SupportCard = (props) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">{props.title}</h3>
                <p className="text-gray-600 text-xl">
                    {props.desc}
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex item-center text-indigo-600">
                  Contact <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
    </>
  )
}

export default SupportCard
