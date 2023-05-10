import {images} from '../datafile'
import { ContactTab } from '../components/ContactTab'
import {LazyLoadImage} from 'react-lazy-load-image-component'

export const ContactPage = () => {

  return (
    <div className='w-full flex flex-col items-center justify-center'>
        
        {/* HERO SECTION */}
        <div className='w-full h-[60vh] relative bg-gray-700 flex flex-col items-center justify-center'>
            <LazyLoadImage className='w-full h-full object-center absolute object-cover mix-blend-overlay'
                src={images.overlay.default} alt='Top View Of A Mine - PC Tom Fisk'/>
            <h2 className='w-[90vw] text-white text-5xl text-center font-bold font-title-font underline underline-offset-8 decoration-accent-primary'>CONTACT US</h2>
        </div>

        {/* INFO-BLOCK SECTION */}
        <ContactTab/>
        
    </div>
  )
}
