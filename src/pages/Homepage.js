import React from 'react'
import {GiMineTruck} from 'react-icons/gi'
import {AiOutlineSafety} from 'react-icons/ai'
import {FaRegHandshake} from 'react-icons/fa'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {images} from '../datafile'

export const Homepage = () => {

  const domain = 'https://ibmohd.github.io/mining/#'

  return (
    <div className='w-full flex flex-col items-center justify-center overflow-y-scroll'>
        
        {/* HERO SECTION */}
        <div className='w-full h-[100vh] relative flex items-center justify-center bg-gray-700'>
            <LazyLoadImage className='w-full h-full object-top absolute object-cover mix-blend-overlay'
                src={images.hero.default}
                 alt='Top View Of A Mine - PC Tom Fisk'/>
            <div className='w-[90vw] flex flex-col items-center justify-center'>
              <h1 className={'text-white text-6xl lg:text-7xl text-center font-bold font-title-font underline decoration-accent-secondary opacity-100 underline-offset-8'}>
                {"MINERAL CITY"}
              </h1>
              <h2 className='text-white text-2xl lg:text-3xl text-center font-bold font-title-font underline decoration-accent-primary opacity-100 underline-offset-8'>
                {"International Trade Co LTD"}
              </h2>
              <div className='flex flex-col items-center justify-center mt-10'>
                <h3 className='text-white text-4xl lg:text-5xl text-center font-bold  font-title-font opacity-100'>
                  {"DEDICATED TO BUILDING BUSINESS PARTNERSHIPS"}
                </h3>
                <h3 className='text-white text-4xl lg:text-5xl text-center font-medium  font-title-font opacity-100'>
                  {"UPON INTEGRITY & HONESTY"}
                </h3>
                <a href={`${domain}/about-us`} className='transition duration-150 bg-glass button font-main-font flex items-center justify-center w-64 h-16 border-4 mt-10 rounded-full text-white hover:text-primary hover:border-primary hover:bg-accent-primary cursor-pointer z-10'>
                  {"DISCOVER MORE"}
                </a>
              </div>
            </div>
        </div>

        {/* CONTENT BOX SECTION */}
        <div className='w-full lg:h-[35vh] bg-white flex items-center justify-center lg:relative'>
          <div className='w-[100vw] flex flex-col lg:flex-row items-center justify-around lg:absolute bottom-10 pb-10 lg:pb-0 font-title-font text-white'>
            
            {/* PRODUCTS */}
            <div className='w-[90%] lg:w-[25%] h-[50vh] lg:h-[40vh] mt-5 lg:mt-0 z-20 relative shadow-lg rounded-md'>
              <LazyLoadImage className='w-full h-full object-top  object-cover mix-blend-overlay shadow-2xl rounded-md'
                src={images.export.default}
                alt='Mineral Ore - PC Paul Seling'/>
              <div className='w-full h-[30%] bg-glass opacity-90 absolute top-0 flex items-center justify-center rounded-md'>
                  <h3 className='w-[80%] break-words text-center opacity-100 text-lg font-bold underline underline-offset-4 rounded-md'>
                    {"EXPORT READY PRODUCTS"}
                  </h3>
              </div>
              <a href={`${domain}/products`} className='transition duration-150 bg-glass button flex items-center justify-center w-56 py-2 border-2 border-secondary rounded-full opacity-100 lg:opacity-80 hover:opacity-100  hover:text-primary hover:border-primary hover:bg-accent-primary absolute bottom-10 left-[50%] translate-x-[-50%] translate-y-0 font-main-font'>
                {"LEARN MORE"}
              </a>
            </div>

            {/* SERVICES */}
            <div className='w-[90%] lg:w-[25%] h-[50vh] lg:h-[40vh] mt-5 lg:mt-0 z-20 relative shadow-lg bg-gray-500 rounded-md'>
              <LazyLoadImage className='w-full h-full object-top  object-cover mix-blend-overlay shadow-2xl rounded-md'
                src={images.consult.default} 
                alt='Front End Of Loader Machine'/>
              <div className='w-full h-[30%] bg-glass opacity-90 absolute top-0 flex items-center justify-center rounded-md'>
                  <h3 className='w-[80%] break-words text-center opacity-100 text-lg font-bold underline underline-offset-4 rounded-md'>
                    {"CONSULTANCY & PARTNERSHIP SERVICES"}
                  </h3>
              </div>
              <a href={`${domain}/services`} className='transition duration-150 bg-glass button flex items-center justify-center w-56 py-2 border-2 border-secondary rounded-full opacity-100 lg:opacity-80 hover:opacity-100 hover:text-primary hover:border-primary hover:bg-accent-primary absolute bottom-10 left-[50%] translate-x-[-50%] translate-y-0 font-main-font'>
                {"LEARN MORE"}
              </a>
            </div>
            
            
          </div>
        </div>

        {/* About Us Section */}
        <div className='w-full h-[120vh] lg:h-[80vh] relative flex items-center justify-center bg-gray-700'>
            <LazyLoadImage className='w-full h-full object-top absolute object-cover mix-blend-overlay'
                src={images.crystal.default} 
                alt='Crystal Background'/>
            <div className='absolute w-[80%] h-[90%] flex flex-col lg:flex-row items-center justify-evenly'>

              <div className='w-full lg:w-[50%] h-[50%] lg:h-full bg-white rounded-full'>
                <LazyLoadImage src={images.rig.default}
                 alt='' className='w-full h-full object-cover rounded-full'/>
              </div>

              <div className='w-[full] lg:w-[40%] h-[50%] lg:h-[80%] text-secondary flex flex-col items-center mt-5 md:pt-20'>
                <h2 className='w-full text-4xl lg:text-6xl font-title-font underline text-center underline-offset-4 decoration-accent-primary'>About Us</h2>
                <p className='text-center mt-5 text-lg w-[full] lg:text-xl font-main-font'>
                  Mineral City International Trade Co. connects global businesses with reliable and high-quality products. 
                  We pride ourselves on building lasting partnerships through exceptional service and transparent communication. 
                  Experience the ease of importing with us.
                </p>
                <a href={`${domain}/about-us`} className='transition duration-150 button font-main-font flex items-center justify-center w-48 lg:w-56 h-10 py-5 lg:py-0 lg:h-16 border-4 mt-5 rounded-full text-white hover:text-primary hover:border-primary hover:bg-accent-primary cursor-pointer'>
                  {"LEARN MORE"}
                </a>
              </div>

            </div>
        </div>


        {/* NEXT SECTION */}
        <div className='w-[100vw] bg-secondary flex flex-col items-center mt-0 text-center justify-center'>
          <h4 className='w-[90%] font-title-font text-black text-3xl lg:text-5xl underline decoration-accent-primary underline-offset-4 my-5'>
            Our Promise To You
          </h4>
          <div className='w-full flex flex-col lg:flex-row items-center justify-center font-title-font'>
            <div className='grid grid-cols-3 w-full py-5'>
              <div className='col-span-3 lg:col-span-1 h-[20rem] lg:h-[25rem]  flex flex-col items-center  text-primary'>
                  <GiMineTruck size={180}/>
                <h4 className='underline decoration-accent-primary underline-offset-4 font-light w-[80%] text-3xl text-black'>Commitment</h4>
                <p className='w-[80%] font-light text-2xl my-5'>
                  Our team of professionals ensure that our services are tailored to
                  individual clients, while maintaining prompt and exceptional delivery.
                </p>
              </div>
              <div className='col-span-3 lg:col-span-1 h-[20rem] lg:h-[25rem]  flex flex-col items-center  text-primary'>
                  <FaRegHandshake size={180}/>
                <h4 className='underline decoration-accent-primary underline-offset-4 font-light w-[80%] text-3xl text-black'>Assurance</h4>
                <p className='w-[80%]  font-light text-2xl mt-5 my-5'>
                  Through transparency, integrity and the utmost disgression we aim to
                  build and foster our relationship with you.
                </p>
              </div>
              <div className='w-full col-span-3 lg:col-span-1 h-[20rem] lg:h-[25rem]  flex flex-col items-center  text-primary'>
                  <AiOutlineSafety size={180}/>
                <h4 className='underline decoration-accent-primary underline-offset-4 font-light w-[80%] text-3xl text-black'>Reliability</h4>
                <p className='w-[80%]  font-light text-2xl mt-5 my-5'>
                  We guarantee timeless top quality products, services and 
                  support to help your ambitions become reality.
                </p>
              </div>
            </div>
          </div>
        </div>

        

      {/* Agro Products Section */}
      {/* Mineral Products Section */}
      {/* Precious Metal Products Section */}

      <div className='w-full h-[100vh] lg:h-[50vh] grid grid-cols-3'>

        <div className='col-span-3 lg:col-span-1 relative bg-gray-700 flex flex-col text-white'>
          <LazyLoadImage src={images.grains.default}
                placeholderSrc={images.grains.blur}
           className='absolute w-full h-full object-cover' alt='Gold 100g Plates'/>
          <div className='w-full h-[30%] bg-glass opacity-90 absolute top-0 flex items-center justify-center'>
            <h3 className='w-[80%] break-words text-center opacity-100 text-lg font-bold underline underline-offset-4 decoration-accent-primary'>
              {"AGRICULTURAL EXPORTS"}
            </h3>
          </div>
          <a href={`${domain}/products/agricultural-products-exports`} className='transition duration-150 bg-glass button flex items-center justify-center w-56 py-2 border-2 border-secondary rounded-full opacity-100 lg:opacity-80 hover:opacity-100  hover:text-primary hover:border-primary hover:bg-accent-primary absolute bottom-10 left-[50%] translate-x-[-50%] translate-y-0 font-main-font'>
            {"LEARN MORE"}
          </a>
        </div>

        <div className='col-span-3 lg:col-span-1 relative bg-gray-400 flex flex-col text-white'>
          <LazyLoadImage src={images.mining.default} 
              placeholderSrc={images.mining.blur}
              className='absolute w-full h-full object-cover' alt='Gold 100g Plates'/>
          <div className='w-full h-[30%] bg-glass opacity-90 absolute top-0 flex items-center justify-center'>
            <h3 className='w-[80%] break-words text-center opacity-100 text-lg font-bold underline underline-offset-4 decoration-accent-primary'>
              {"MINERAL ORE EXPORTS"}
            </h3>
          </div>
          <a href={`${domain}/products/mineral-ore-exports`} className='transition duration-150 bg-glass button flex items-center justify-center w-56 py-2 border-2 border-secondary rounded-full opacity-100 lg:opacity-80 hover:opacity-100  hover:text-primary hover:border-primary hover:bg-accent-primary absolute bottom-10 left-[50%] translate-x-[-50%] translate-y-0 font-main-font'>
            {"LEARN MORE"}
          </a>
        </div>
        
        <div className='col-span-3 lg:col-span-1 relative bg-gray-400 flex flex-col text-white'>
          <LazyLoadImage src={images.gold.default}
           placeholderSrc={images.gold.blur}
           className='absolute w-full h-full object-cover' alt='Gold 100g Plates'/>
          <div className='w-full h-[30%] bg-glass opacity-90 absolute top-0 flex items-center justify-center'>
            <h3 className='w-[80%] break-words text-center opacity-100 text-lg font-bold underline underline-offset-4 decoration-accent-primary'>
              {"PRECIOUS STONES & METAL EXPORTS"}
            </h3>
          </div>
          <a href={`${domain}/products/precious-stones-and-metals-exports`} className='transition duration-150 button flex items-center justify-center w-56 py-2 border-2 border-secondary rounded-full opacity-100 lg:opacity-80 hover:opacity-100  hover:text-primary hover:border-primary hover:bg-accent-primary absolute bottom-10 left-[50%] translate-x-[-50%] translate-y-0 font-main-font bg-glass'>
            {"LEARN MORE"}
          </a>
        </div>

      </div>


      {/* Contact Us Section */}

      <div className='w-full h-[60vh] lg:h-[40vh] flex flex-col justify-center items-center bg-white'>
        <h2 className='w-full text-4xl lg:text-6xl font-title-font underline text-center underline-offset-4 decoration-accent-primary'>Contact Us</h2>
        <p className='text-center mt-5 text-lg w-[60%] lg:text-xl'>
          Have more questions? Reach out to us on our Contact Us Page.
        </p>
        <a href={`${domain}/contact`} className='transition duration-150 button font-main-font flex items-center justify-center w-48 lg:w-56 h-10 py-5 lg:py-0 lg:h-16 border-4 mt-5 rounded-full text-primary border-primary bg-accent-primary cursor-pointer'>
          {"LEARN MORE"}
        </a>
      </div>
        



    </div>
  )
}
