import React from 'react'


const FooterCard = (props) => {
  return (
    <>
       <div>
                <h6 className='font-bold uppercase pt-2'>{props.title}</h6>
                <ul>
                    <li className='py-1'>{props.li1}</li>
                    <li className='py-1'>{props.li2} </li>
                    <li className='py-1'>{props.li3}</li>
                    <li className='py-1'>{props.li4}</li>
                    <li className='py-1'>{props.li5}</li>
                </ul>
            </div>
    </>
  )
}

export default FooterCard
