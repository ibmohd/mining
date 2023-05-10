import React from 'react'
import {MdEmail,MdPhoneEnabled,MdStoreMallDirectory} from 'react-icons/md'

export const ContactBar = () => {
  return (
    <div className='w-[90vw] lg:w-full my-16 flex flex-col lg:flex-row items-center justify-center text-secondary'>
            
            {/* OPERATION HOURS */}
            <div className='w-full lg:w-[30%] min-h-[40vh] bg-primary flex flex-col items-center justify-center py-10'>
                <div className='w-24 h-24 bg-accent-primary rounded-full flex items-center justify-center text-primary'>
                    <MdStoreMallDirectory size={40}/>
                </div>
                <div className='text-2xl py-5 font-medium'>
                    Opening Hours
                </div>
                <div className='font-thin text-lg'>
                    Mon-Sat:
                </div>
                <div className='font-thin text-lg'>
                    Sun: Closed
                </div>
            </div>

            {/* CALL US */}
            <div className='w-full lg:w-[30%] h-[40vh] bg-primary flex flex-col items-center justify-center py-10'>
                <div className='w-24 h-24 bg-accent-primary rounded-full flex items-center justify-center text-primary'>
                    <MdEmail size={40}/>
                </div>
                <div className='text-2xl py-5 font-medium'>
                    Get In Touch
                </div>
                <div className='font-thin text-lg'>
                   mineralcitytrade@gmail.com
                </div>
            </div>
            
            {/* CONTACT US  */}
            <div className='w-full lg:w-[30%] h-[40vh] bg-primary flex flex-col items-center justify-center py-10'>
                <div className='w-24 h-24 bg-accent-primary rounded-full flex items-center justify-center text-primary'>
                    <MdPhoneEnabled size={40}/>
                </div>
                <div className='text-2xl py-5 font-medium'>
                    Call Us
                </div>
                <div className='font-thin text-lg'>
                    +2341234567890
                </div>
            </div>
            
        </div>
  )
}
