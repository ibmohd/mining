import React from 'react'
import {FaQuestionCircle} from 'react-icons/fa'

export const FAQTab = ({item}) => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center font-title-font'>
        <div className='w-[90vw] md:w-[75vw] py-10 bg-secondary my-10 min-h-[70vh] flex flex-col'>
            <h2 className='text-2xl lg:text-4xl underline decoration-accent-primary underline-offset-4'>
                {`Frequently Asked Questions`}
            </h2>
            {
            item.faqs.map((item,key) => (
                <div key={key} className='mt-10'>
                    <p className='flex justify-start m-5 text-center lg:text-2xl text-xl underline underline-offset-4 decoration-accent-primary'>
                        <FaQuestionCircle className='mt-1 lg:mr-3'/>
                        {item.question}
                    </p>
                    <p className='font-main-font flex justify-start m-5 text-center text-lg'>
                        - {item.answer}
                    </p>
                </div>
            ))
            }
        </div>
    </div>
  )
}
