import React, {useRef, useState} from 'react'
import {toast} from 'react-toastify'
import { ContactBar } from './ContactBar'
import { ValidateForm } from '../services/ValidateForm'
import {sendMail} from '../services/MailHandler'

export const ContactTab = () => {
    //   PULL OUT TO ENV?
    // const domain = 'http://localhost:3000'

    const formEl = useRef()
    const [lock, setLock] = useState(false)
  
    const sendEmail = async (e) => {
      e.preventDefault()
      setLock(true)
      try{

        
        let errors = ValidateForm(formEl.current)
        console.log(errors)
        if(errors.length > 0){
          throw new Error(errors)
        }

        await sendMail(formEl.current,toast)
        .then(({message}) => {
            toast.success(message)
            document.getElementById("contact-form").reset()
        })

  
      }catch(err){
          toast.error(err.message)
      }
      setLock(false)
    }

  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center'>
        <ContactBar/>
        {/* CONTACT FORM SECTION */}
        <div className='grid grid-cols-2 w-full bg-secondary font-main-font pb-10'>
            <div className='col-span-2 lg:col-span-2 flex flex-col items-center justify-center'>
                <h3 className='w-[70%] text-5xl font-bold py-4 text-center font-title-font underline decoration-accent-primary underline-offset-8'>{"Have Any Questions?"}</h3>
                <p className='w-[80%] lg:w-[50%] text-xl font-bold py-4 text-center'>
                Our team of experts offers reliable and secure transaction systems 
                and communication networks to assist international and regional buyers 
                and brokers in consistently purchasing and selling desired products at
                the best quality and prices possible.
                </p>

                <form id={'contact-form'} ref={formEl} onSubmit={sendEmail} className='w-full h-full flex flex-col items-center justify-center text-black'>
                    <input type='text' name='name' required placeholder='Name (Required)' className='w-[90%] lg:w-[70%] p-3 m-2 rounded-2xl border-2 border-secondary'/>
                    <input type='text' name='subject' required placeholder='Subject (Required)' className='w-[90%] lg:w-[70%] p-3 m-2 rounded-2xl border-2 border-secondary'/>
                    <input type='email' name='email' required placeholder='Email Address (Required)' className='w-[90%] lg:w-[70%] p-3 m-2 rounded-2xl border-2 border-secondary'/>
                    <textarea type='text' name='message' rows={10} required={true} placeholder='Your Message (Required)' className='p-3 w-[90%] text-black lg:w-[70%] border-2'/>
                    <button type='submit' disabled={lock} className='w-[50%] p-3 m-2 bg-primary button text-accent-primary hover:text-primary hover:bg-accent-primary px-5 rounded-2xl border-2'>SEND</button>
                </form>
            </div>
        </div>
       
    </div>
  )
}
