import {useEffect, useState} from 'react'
import DataFetcher from '../services/DataFetcher'
import {Section} from '../components/Section'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {images} from '../datafile'


export const ProductCategoriesPage = () => {
    
  const [items, setItem] = useState()

  useEffect(()=>{

    const getData = async () => {
      const data = await DataFetcher.fetchAllProducts()
      setItem(data)
    }

    getData()

  },[])

  return (
    <div className='flex flex-col items-center'>
      {/* HERO SECTION */}
      <div className='w-full h-[60vh] relative bg-gray-700 flex items-center justify-center'>
        <LazyLoadImage className='w-full h-full object-center absolute object-cover mix-blend-overlay'
            src={images.truck.default} alt='Truck Carrying Goods'/>
        <h2 className='w-[90vw] text-white text-5xl text-center font-bold font-title-font underline underline-offset-8 decoration-accent-primary'>OUR PRODUCTS</h2>
      </div>
      <div className='w-full min-h-[100vh] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-secondary py-10'>
  
        {items?.map(
          (item,index)=>(<Section item={item} key={index} category={item.name} type={"products"}/>))}
        
      </div>
    </div>
  )
}
