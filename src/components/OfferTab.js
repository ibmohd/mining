import React from 'react'
import {GrStatusGood} from 'react-icons/gr'

export const OfferTab = ({item}) => {

  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center'>
        <h2 className='text-3xl my-5 underline underline-offset-4 decoration-accent-primary'>Our Services To You</h2>


<div className='w-[90vw] grid grid-cols-3 text-center my-5'>
  {item?.services?.map((value,key) => (
      <div key={key} className='col-span-3 border-2 border-black flex items-center justify-center  py-2'>{value}</div>
  ))}
  {item?.docs?.map((value,key) => (
    <>
      <div className='col-span-2 border-2 border-black border-r-0 flex items-center justify-center  py-2'>{value}</div>
      <div className='col-span-1 border-2 border-black  py-2 flex items-center justify-center text-2xl bg-emerald-700 text-white'><GrStatusGood color='white'/></div>
    </>
  ))}
</div>
</div>
  )
}
