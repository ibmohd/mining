import {useState} from 'react'

export const ImageTab = ({item}) => {


  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center'>
        <div className='w-[90vw] md:w-[75vw] py-10 my-10 min-h-[70vh] flex flex-col items-center'>
          <div className='grid lg:grid-cols-3 gap-5 w-[90vw] md:w-[75vw] py-10  my-10 min-h-[70vh]'>
            {
              item.images?.map((image,index) => (
                <div key={index} className='col-span-3 lg:col-span-1 relative w-full lg:w-[300px] h-[300px]'>
                  <img src={image} alt='' className='absolute object-cover w-full h-full cursor-pointer' onClick={()=>{}} />
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}
