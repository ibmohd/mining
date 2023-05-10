import React from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './Header'
import { Footer } from './Footer'

export const LayoutComponent = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='w-full min-h-[100vh] flex flex-col'>
          <ToastContainer position='bottom-right'/>
          {children}
        </div>
        <Footer/>
    </div>
  )
}
