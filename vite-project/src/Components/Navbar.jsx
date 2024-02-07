import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Navbar() {
    
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white    '>
        <div>
            Mario V
        </div>
        <ul className='hidden md:flex'>
            {/* Button to return Home */}
            <li>
                <Link to="/">Home</Link>
                
            </li>
            
            {/* Button to go to Resume */}
            <li>
                <Link to='Resume'>Resume</Link>

            </li>

            {/* Button to go to Portfolio */}
            <li>
                <Link to='Portfolio'>Portfolio</Link>

            </li>
            <li>
                <Link to='Contact'>Contact Me</Link>
            </li>

        </ul>
        {/* button for mobile menu*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-indigo-600'}>
            <li className='py-6 text-4xl'>
                <Link to='/'onClick={handleClick}>Home</Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link to='/Resume'onClick={handleClick}>Resume</Link> 
            
            </li>
            <li className='py-6 text-4xl'>
                <Link to='/Portfolio'onClick={handleClick}>Portfolio</Link> 
            
            </li>
            <li className='py-6 text-4xl'> Contact 
            
            </li>
        </ul>

    </nav>
  )
}

export default Navbar