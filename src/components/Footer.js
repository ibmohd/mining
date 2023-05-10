import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='w-full flex flex-col bg-secondary items-center'>
      <div className='w-[90%] border-t-2 border-primary'></div>
      <div className='w-full flex flex-col lg:flex-row'>
        
        {/* LOGO AND SOCIALS */}
        <div className='w-full lg:w-[33.333%] h-[20rem] flex flex-col items-center justify-center'>
          <h2 className='w-[90%] font-bold text-3xl text-center font-title-font'>Mineral City International Trade Co LTD</h2>
          <section className='w-[50%] flex flex-row justify-around items-center my-5'>
            <a href={'/'}>
              <AiFillTwitterSquare size={40} className='cursor-pointer text-[#00acee]'/>
            </a>
            <a href={'/'}>
              <AiFillFacebook size={40} className='cursor-pointer text-[#4267B2]'/>
            </a>
            <a href={'/'}>
              <AiFillInstagram size={40} className='cursor-pointer text-[#bc2a8d]'/>
            </a>
          </section>
          <h2 className='w-[90%] font-bold text-xl text-center font-title-font'>Connect With Us</h2>
        </div>

        {/* CONTACT US AND SOCIALS */}
        <div className='w-full lg:w-[33.333%] h-[20rem] flex flex-col items-center'>
          <h4 className='w-[75%] text-center mt-10 text-xl underline decoration-accent-primary underline-offset-4'>Get In Touch</h4>
        </div>

        {/* SITE MAP/LINKS */}
        <div className='w-full lg:w-[33.333%] h-[20rem] flex flex-col items-center'>
          <h4 className='text-center mt-10 text-xl underline decoration-accent-primary underline-offset-4 mb-5 px-5'>Navigation</h4>
          <div className='flex flex-col'>
          {[
            {title:'Home',url: '/'},
            {title:'About Us',url: 'about-us'},
            {title:'Products',url: 'products'},
            {title:'Services',url: 'services'},
            {title:'Contact',url: 'contact'},
          ].map((item,i)=>{
            return <a key={i} href={item.url} className='text-xl hover:text-accent-primary w-24 text-center mt-1'>{item.title}</a>
          })}
          </div>
        </div>

      </div>

      {/* COPYRIGHT AND LEGALS */}
      <div className='w-full h-[3rem] bg-primary'>

      </div>
    </div>
  )
}
