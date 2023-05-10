import {useState,useEffect} from 'react'
import {images} from '../datafile'
import { useParams } from 'react-router-dom'
import { unslugify } from '../utilities/slugify'
import { ImageTab} from '../components/ImageTab'
import { SpecificationTab} from '../components/SpecificationTab'
import { AboutTab} from '../components/AboutTab'
import { TradeTab} from '../components/TradeTab'
import {ContactTab} from '../components/ContactTab'
import DataFetcher from '../services/DataFetcher'
import { LazyLoadImage } from 'react-lazy-load-image-component'


export const SingleProductPage = () => {

  const {slug,category} = useParams()
  const [item, setItem] = useState()
  const [selected, setSelected] = useState('specification')

  useEffect(()=>{
    const getData = async () => {
      const data = await DataFetcher.fetchProduct(slug,category)
      setItem(data)
    }

    getData()
  },[slug,category])


  return (
    <div className='w-full flex flex-col items-center bg-white text-center'>
      {/* HERO SECTION */}
      <div className='w-full h-[60vh] relative bg-gray-700 flex items-center justify-center'>
        <LazyLoadImage className='w-full h-full object-center absolute object-cover mix-blend-overlay'
            src={images.defaultimg3.default} alt='Top View Of A Mine - PC Tom Fisk'/>
        <h2 className='w-[90vw] text-white text-5xl text-center font-bold font-title-font underline underline-offset-8 decoration-accent-primary'>{unslugify(slug).toUpperCase()}</h2>
      </div>
      
      <div className='w-full min-h-[70vh] flex flex-col lg:flex-row bg-background lg:justify-center my-10'>
        <div className='w-full lg:w-[90%] flex flex-col items-center'>
            {/* switch tabs */}
            <div className=' w-full flex-inline'>
            <ul className='flex flex-col md:flex-row items-center'>
                <li onClick={()=>setSelected('specification')} className={selected==='specification' ? 'shadow-inner shadow-black text-center p-4 text-md md:w-64 bg-primary text-secondary cursor-pointer w-[90%]':'w-[90%] text-center p-4 text-md md:w-64 bg-background border-2 border-primary text-primary cursor-pointer hover:shadow-inner hover:shadow-black'}>Specifications</li>
                <li onClick={()=>setSelected('about product')} className={selected==='about product' ? 'shadow-inner shadow-black text-center p-4 text-md md:w-64 bg-primary text-secondary cursor-pointer w-[90%]':'w-[90%] text-center p-4 text-md md:w-64 bg-background border-2 border-primary text-primary cursor-pointer hover:shadow-inner hover:shadow-black'}>{`About`}</li>
                <li onClick={()=>setSelected('images')} className={selected==='images' ? 'shadow-inner shadow-black text-center p-4 text-md md:w-64 bg-primary text-secondary cursor-pointer w-[90%]':'w-[90%] text-center p-4 text-md md:w-64 bg-background border-2 border-primary text-primary cursor-pointer hover:shadow-inner hover:shadow-black'}>{`Images`}</li>
                <li onClick={()=>setSelected('trade process')} className={selected==='trade process' ? 'shadow-inner shadow-black text-center p-4 text-md md:w-64 bg-primary text-secondary cursor-pointer w-[90%]':'w-[90%] text-center p-4 text-md md:w-64 bg-background border-2 border-primary text-primary cursor-pointer hover:shadow-inner hover:shadow-black'}>Trade Process</li>
                <li onClick={()=>setSelected('contact')} className={selected==='contact' ? 'shadow-inner shadow-black text-center p-4 text-md md:w-64 bg-primary text-secondary cursor-pointer w-[90%]':'w-[90%] text-center p-4 text-md md:w-64 bg-background border-2 border-primary text-primary cursor-pointer hover:shadow-inner hover:shadow-black'}>Contact</li>
            </ul>
            </div>


            {
              selected === "specification" ? <SpecificationTab item={item}/> :
              selected === "about product" ? <AboutTab item={item}/> :
              selected === "images" ? <ImageTab item={item}/> :
              selected === "contact" ? <ContactTab item={item}/> :<TradeTab/>
            }

        </div>

    </div>

    </div>
  )
}
