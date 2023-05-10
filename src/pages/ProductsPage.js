import {useEffect,useState} from 'react'
import {Section} from '../components/Section'
import { useParams } from 'react-router-dom'
import {images} from '../datafile'
import { unslugify } from '../utilities/slugify'
import DataFetcher from '../services/DataFetcher'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const ProductsPage = () => {
  
  const {category,slug} = useParams()
  const [item, setItem] = useState()


  useEffect(()=>{
    const getData = async () => {
      const data = await DataFetcher.fetchCategory(category)
      setItem(data)
    }

    getData()
  },[slug,category])


  return (
    <div className='w-full flex flex-col'>
      {/* HERO SECTION */}
      <div className='w-full h-[60vh] relative bg-gray-700 flex items-center justify-center'>
        <LazyLoadImage className='w-full h-full object-center absolute object-cover mix-blend-overlay'
            src={images.defaultimg.default} alt='Top View Of A Mine - PC Tom Fisk'/>
        <h2 className='w-[90vw] text-white text-5xl text-center font-bold font-title-font underline underline-offset-8 decoration-accent-primary'>{unslugify(category).toUpperCase()}</h2>
      </div>
      <div className='w-full min-h-[100vh] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-secondary py-10'>
        
          {item?.map(
            (product,index)=>(<Section item={product} key={index} category={category} name={product.name} type={"products"}/>))}
        

      </div>

    </div>
  )
}
