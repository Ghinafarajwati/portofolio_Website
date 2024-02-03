import { useState } from 'react'
import { Link } from 'react-scroll'
import MediaQuery from '../hooks/mediaQuery.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import menuItems from '../assets/data/navbarData.jsx'

const Navbar = ({ isTopOfPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = MediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-purple-500 border-b border-white/50";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className="font-playfair text-3xl font-bold">Gh</h4>

            {isAboveSmallScreens ? (
              
          <div className="flex justify-between gap-10 font-opensans text-md font-semibold">
            {menuItems.map((menu, id) => (
              <div className='font-opensans text-md font-semibold text-white hover:text-black' key={id}>
                <Link to={menu.title} smooth={true} offset={200} duration={500}>{menu.title}</Link>
              </div>
            ))}
          </div>
        ) : (
            <button
            className="rounded-full bg-red px-4 py-2 mt-[1rem]"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FontAwesomeIcon icon={faAngleRight}/>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-2 h-full bg-gradient-to-t from-purple-900 to-purple-500  w-[12rem] ">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <FontAwesomeIcon icon={faAngleLeft} className='rounded-full px-4 py-3 bg-white text-black'/>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-6 ml-[20%] text-xl text-white ">
            {menuItems.map((menu) => (
              <>
                <Link to={menu.title} smooth={true} offset={200} duration={500}>{menu.title}</Link>
              </>
            ))}
            </div>
          </div>
        )}
        </div>
    </nav>
  )
}

export default Navbar
