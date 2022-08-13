import React from 'react'
import { CheckIcon } from "@heroicons/react/outline";


const AllInOneCard = (props) => {
  return (
    <>
      <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{props.title}</h3>
                <p className="text-lg pt-2 pb-4">
                  {props.para}
                </p>
              </div>
            </div>
    </>
  )
}

export default AllInOneCard
