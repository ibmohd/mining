import React from 'react'

export const AboutTab = ({item}) => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center'>
        <div className='w-[90vw] md:w-[75vw] py-10 bg-secondary my-10 min-h-[70vh] flex flex-col'>
            <h3 className='text-2xl lg:text-4xl underline decoration-accent-primary underline-offset-4'>
                {`About ${item.name}`}
            </h3>
            <p className='flex justify-start m-10 text-center text-lg'>
                {item.about}
            </p>
        </div>
    </div>
  )
}
