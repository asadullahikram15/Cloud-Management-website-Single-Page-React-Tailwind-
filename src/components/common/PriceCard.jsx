import React from 'react'
import { CheckIcon } from "@heroicons/react/solid";


const PriceCard = (props) => {
  return (
    <>
       <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                {props.package}
              </span>
              <div>
                <p className="text-6xl font-bold py-4 flex">
                  ${props.price}
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /month
                  </span>
                </p>
              </div>
              <p className="text-xl py-1 text-slate-500">
                {props.desc}
              </p>
              <div className="text-xl">
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />{props.item1}
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" /> {props.item2}
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />{props.item3}
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" /> {props.item4}
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" /> {props.item5}
                </p>
                <button className="w-full py-4 my-4">Get Started</button>
              </div>
            </div>
    </>
  )
}

export default PriceCard
