import React from 'react'
import {images} from '../datafile'
import { slugify } from '../utilities/slugify'
import {LazyLoadImage} from 'react-lazy-load-image-component'


export const Section = ({item,category,name,type}) => {

  const domain = "https://ibmohd.github.io/mining"
  const categorySlug  = slugify(category)
  const url = name ? `${domain}/${type}/${categorySlug}/${slugify(name)}` : `${domain}/${type}/${categorySlug}`

  return (
    <a href={url} className={`bg-white transition duration-150 text-black decoration-black hover:decoration-white hover:text-white hover:bg-gray-500 relative col-span-3 sm:col-span-1 
        h-80 sm:h-[15rem] mx-5 flex flex-col items-center justify-center text-center border-2 rounded-xl
        ${item.image ? '' : 'odd:hover:bg-emerald-800 even:hover:bg-cyan-800'}`}>
    <LazyLoadImage className='w-full h-full object-top absolute object-cover mix-blend-overlay blur-[1px]'
        src={item.image ? item.image:images.rig.default} alt='Top View Of A Mine - PC Tom Fisk'/>
    <div className='w-full flex flex-col items-center justify-center'>
        <h1 className={'underline text-2xl lg:text-4xl text-center font-bold font-title-font opacity-100'}>
        {item.name}
        </h1>
        <h1 className={'w-[80%] text-lg lg:text-xl text-center font-bold font-title-font opacity-100'}>
        {item.description}
        </h1>
    </div>
    </a>
  )
}
