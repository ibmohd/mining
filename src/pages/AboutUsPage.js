import {images} from '../datafile'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {MdDirectionsBoatFilled, MdPhoneEnabled,MdOutlineDocumentScanner} from 'react-icons/md'

export const AboutUsPage = () => {

  const domain = 'https://ibmohd.github.io'
  const rcnum = 2009255
  const companynum = '+234 809 686 2582'
  const exportnum = 1234567

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      
      {/* HERO SECTION */}
      <div className='w-full h-[60vh] relative bg-gray-700 flex flex-col items-center justify-center'>
            <LazyLoadImage className='w-full h-full object-center absolute object-cover mix-blend-overlay'
                src={images.cargo.default} alt='Cargo Ship'/>
            <h2 className='w-[90vw] text-white text-5xl text-center font-bold font-title-font underline underline-offset-8 decoration-accent-primary'>ABOUT US</h2>
            <h2 className='w-[75%] md:w-[60%] lg:w-[40%] text-white text-2xl text-center font-bold font-title-font bg-glass mt-5'>
            "A satisfied customer is the best business strategy of all" - Michael LeBoeuf
            </h2>
        </div>


        {/* INFO SECTION */}
        <div className='w-[90vw] lg:w-full lg:mt-[-7.5rem] z-10 flex flex-col lg:flex-row items-center justify-center text-primary'>
            
            {/* OPERATION HOURS */}
            <div className='w-full lg:w-[30%] min-h-[40vh] flex flex-col items-center justify-center py-10'>
                <div className='w-24 h-24 bg-accent-primary rounded-full flex items-center justify-center text-primary'>
                    <MdDirectionsBoatFilled size={40}/>
                </div>
                <div className='text-2xl py-5 font-medium'>
                    Export Licence Number
                </div>
                <div className='font-thin text-lg'>
                   {exportnum}
                </div>
            </div>

            {/* CALL US */}
            <div className='w-full lg:w-[30%] h-[40vh] flex flex-col items-center justify-center py-10'>
                <div className='w-24 h-24 bg-accent-primary rounded-full flex items-center justify-center text-primary'>
                    <MdOutlineDocumentScanner size={40}/>
                </div>
                <div className='text-2xl py-5 font-medium'>
                    RC Number
                </div>
                <div className='font-thin text-lg'>
                   {rcnum}
                </div>
            </div>
            
            {/* CONTACT US  */}
            <div className='w-full lg:w-[30%] h-[40vh] flex flex-col items-center justify-center py-10'>
                <div className='w-24 h-24 bg-accent-primary rounded-full flex items-center justify-center text-primary'>
                    <MdPhoneEnabled size={40}/>
                </div>
                <div className='text-2xl py-5 font-medium'>
                    Call Us
                </div>
                <div className='font-thin text-lg'>
                    {companynum}
                </div>
            </div>
        </div>


        {/* ABOUT US */}
        <div className='w-[100vw] flex flex-col items-center bg-secondary py-20 mb-10'>
          
          <div className='w-full lg:w-[90vw] lg:h-[80vh] flex flex-col lg:flex-row items-center'>
            

            <div className='w-[90%] lg:w-[50%] h-[50vh] lg:h-full bg-gray-300 relative'>
              <LazyLoadImage src={images.hero.default} alt='Shipping Yard At Night' className='absolute h-full w-full'/>
            </div>

            <div className='w-full lg:w-[50%] h-[50%] lg:h-full bg-white flex flex-col  pb-5 lg:pb-0'>
              <h4 className='text-accent-primary font-bold font-title-font text-xl mt-10 ml-5 lg:ml-20'>ABOUT US</h4>
              <h2 className='font-[900] font-main-font text-4xl lg:text-[2.5rem] mt-3 lg:mt-5 ml-5 lg:ml-20 text-primary'> OUR JOURNEY SO FAR.</h2>
              <p className='mt-3 lg:mt-5 ml-5 lg:ml-20 w-[80%]'>
                Here at Mineral City, trust and efficiency are at the core of everything we do. We understand that international trade is a complex and challenging industry, 
                which is why we have assembled a team of highly experienced and skilled professionals who are dedicated to providing top-quality services and products. 
              </p>
              <p className='mt-3 lg:mt-5 ml-5 lg:ml-20 w-[80%]'>
                We use state-of-the-art equipment and employ the latest techniques to ensure maximum efficiency and productivity. 
                We understand the importance of building trust with our clients, and we work hard to earn it by delivering results that exceed expectations. 
                We pride ourselves on our reputation for being a reliable, efficient and trustworthy partner.
              </p>
            </div>



          </div>

          <div className='w-full lg:w-[90vw] lg:h-[80vh] flex flex-col lg:flex-row-reverse items-center'>
            

            <div className='w-[90%] lg:w-[50%] h-[50vh] lg:h-full bg-gray-300 relative'>
              <LazyLoadImage src={images.different.default} alt='Shipping Yard At Night' className='absolute h-full w-full'/>
            </div>

            <div className='w-full lg:w-[50%] h-[50%] lg:h-full bg-white flex flex-col  pb-5 lg:pb-0'>
              <h4 className='text-accent-primary font-bold font-title-font text-xl mt-10 ml-5 lg:ml-20'>OUR VALUES</h4>
              <h2 className='font-[900] font-main-font text-4xl lg:text-[2.5rem] mt-3 lg:mt-5 ml-5 lg:ml-20 text-primary'> WHAT MAKES US DIFFERENT.</h2>
              <p className='mt-3 lg:mt-5 ml-5 lg:ml-20 w-[80%]'>
              As a Nigerian export company, Mineral City stands out for its commitment to providing high-quality products and exceptional customer service. We have a deep understanding of the Nigerian market and have established strong relationships with local suppliers, allowing us to source a wide range of products at competitive prices. Our team of experts carefully inspects and verifies the quality of every product before it is shipped to ensure that our customers receive only the best.
              </p>
              <p className='mt-3 lg:mt-5 ml-5 lg:ml-20 w-[80%]'>
              We also have a reliable logistics network and experienced staff to handle customs clearance and documentation, ensuring timely and smooth delivery of goods. Our goal is to be the trusted partner for businesses looking to import/export Nigerian goods and we strive to achieve it by providing the best services.
              </p>
            </div>



          </div>


        </div>


        <div className='w-full h-[60vh] lg:h-[40vh] flex flex-col justify-center items-center bg-white'>
        <h2 className='w-full text-4xl lg:text-6xl font-title-font underline text-center underline-offset-4 decoration-accent-primary'>Contact Us</h2>
        <p className='text-center mt-5 text-lg w-[60%] lg:text-xl'>
          Have more questions? Reach out to us on our Contact Us Page.
        </p>
        <a href={`${domain}/contact`} className='button font-main-font flex items-center justify-center w-48 lg:w-56 h-10 py-5 lg:py-0 lg:h-16 border-4 mt-5 rounded-full text-primary border-primary bg-accent-primary cursor-pointer'>
          {"LEARN MORE"}
        </a>
      </div>


        
     
    
    
    </div>
  )
}
