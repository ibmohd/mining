import {useEffect,useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BurgerSidebar } from './BurgerSidebar';



export const Header = () => {

  //   PULL OUT TO ENV?
  const domain = 'http://localhost:3000'

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };

  const scrollDirection = useScrollDirection()

  const [open, setOpen] = useState(false)

    
  return (
    <>
    <BurgerSidebar open={open} setOpen={setOpen}/>
    <div className={`sticky ${ scrollDirection === "down" ? "-top-[7vh]" : "top-0"} transition-all duration-500 w-[100vw] h-[7vh] lg:h-[7vh] grid grid-cols-5 lg:grid-rows-3 fixed z-50 bg-[white] opacity-80`}>
        

        {/* COMPANY LOGO AND NAME */}
        <a href={`${domain}`} className=' col-span-4 lg:col-span-1 lg:row-span-2 flex flex-col items-center text-black font-title-font cursor-pointer'>
            <div className='text-center text-2xl font-bold'>
                Mineral City
            </div>
            <div className='text-sm text-center'>
                {'International Trade Co LTD'}
            </div>
        </a>


        {/* LINK SECTION */}
        <div className='hidden lg:col-span-3 lg:row-span-3 lg:flex items-center justify-evenly text-black font-title-font text-xl'>
            <a href={`${domain}`} className={`hover:font-bold hover:underline decoration-[#fed550]`}>Home</a>
            <a href={`${domain}/about-us`} className={`hover:font-bold hover:underline decoration-[#fed550]`}>About Us</a>
            <a href={`${domain}/products`} className={`hover:font-bold hover:underline decoration-[#fed550]`}>Products</a>
            <a href={`${domain}/services`} className={`hover:font-bold hover:underline decoration-[#fed550]`}>Services</a>
            <a href={`${domain}/contact`} className={`hover:font-bold hover:underline decoration-[#fed550]`}>Contact</a>
        </div>

        {/* BURGER MENU */}
        <div className='col-span-1 max-h-[7vh] bg-[white] flex items-center justify-center lg:hidden opacity-100'>
            <GiHamburgerMenu size={30} color='black' onClick={()=> setOpen(!open)}/>
        </div>

    </div>
    </>
  )
}
