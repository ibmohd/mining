import React from 'react'

export const TradeTab = ({item}) => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center'>
        <div className='w-[90vw] md:w-[75vw] py-10 bg-secondary my-10 min-h-[70vh] flex flex-col items-center'>
            <h3 className='text-3xl font-bold text-primary'>
                {`Our Trading Process`}
            </h3>
            <h4 className='flex justify-start m-10 text-center text-xl font-bold'>
                {`Our trade process is dependant on the buyer's preference, as we offer both C&F and FOB.`}
            </h4>
            <div className='w-full flex flex-col lg:flex-row items-center justify-evenly'>
                <div className='w-[90%] lg:w-[40%] my-5 flex flex-col'>
                    <h3 className='font-bold underline underline-offset-4 text-xl'>
                        Cost and Freight (C&F)
                    </h3>
                    <h4 className='mt-10'>
                        {`Here, the seller will handle everything from loading the vessel and shipping the product to wherever the buyer wants it delivered.`}
                    </h4>
                </div>
                <div className='w-[80%] lg:w-0 lg:h-full border border-black'></div>
                <div className='w-[90%] lg:w-[40%] my-5 flex flex-col'>
                    <h3 className='font-bold underline underline-offset-4 text-xl'>
                        Freight On Board (FOB)
                    </h3>
                    <h4 className='mt-10'>
                    {`Here, the seller pays for the transportation of the goods to the port of shipment, plus loading costs, while the buyer pays the cost of marine freight transport, insurance, unloading, and transportation from the originating port to the final destination.`}
                    </h4>
                </div>
            </div>
        </div>
    </div>
  )
}
