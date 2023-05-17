import React from 'react'

export const BurgerSidebar = ({open,setOpen}) => {

    const domain = 'https://ibmohd.github.io/mining/#'

  return (
   <>
     <div className={`fixed top-0 left-0 h-full w-full md:w-[50vw] z-50 flex-col bg-secondary ${open ? `translate-x-0`:`-translate-x-full`} ease-in-out duration-300`}>
            <div className='flex w-full h-20 justify-end items-center mb-10'>
                <span className='cursor-pointer pr-5'>
                    
                    {/* cancel svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    onClick={()=> setOpen(!open)}
                    className="h-12 w-12 mr-5 mt-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>

                </span>
            </div>

            <div className='flex-col w-full h-full'>
            {[
                {title:'Home',url: `${domain}`},
                {title:'About Us',url: `${domain}/about-us`},
                {title:'Products',url: `${domain}/products`},
                {title:'Services',url: `${domain}/services`},
                {title:'Contact',url: `${domain}/contact`},
            ].map((item,i)=>{
                    return <div key={i}>
                        <a href={item.url} onClick={()=> setOpen(false)}>
                            <div className=' h-20 flex justify-center items-center p-10 hover:bg-slate-300 cursor-pointer text-accent-primary text-2xl'>
                                
                                <p className='button bg-gradient-to-b from-secondary via-primary to-primary px-10 py-2 rounded-md border-black border-2'>
                                    {item.title} 
                                </p>
                            </div>
                        </a>
                    </div>
                })}
            </div>

        </div>
        <div className={`opacity-60 fixed w-full h-full inset-0 z-40 bg-black ${open ? `translate-x-0`:`-translate-x-full`}`} onClick={()=> setOpen(false)}></div>
   </>
  )
}