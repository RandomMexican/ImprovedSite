import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white'>
        {/* from-indigo-600 via-indigo-900 to-purple-900 */}
        <div>
            Mario V

        </div>



        <ul className='hidden md:flex'>
            <li>Home </li>
            <li>About Me </li>
            <li>Resume </li>
            <li>Portfolio </li>
            <li>Contact</li>
        </ul>

        {/* menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {/* <FaBars/> */}
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-indigo-600'}>
            <li className='py-6 text-4xl'> Home </li>
            <li className='py-6 text-4xl'> About Me </li>
            <li className='py-6 text-4xl'> Resume </li>
            <li className='py-6 text-4xl'> Portfolio </li>
            <li className='py-6 text-4xl'> Contact </li>
        </ul>

        {/* Socials */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li>
                    
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar