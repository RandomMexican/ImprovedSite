import React, { useState } from 'react'

import { Link } from 'react-router-dom'



const Footer = () => {

  const [fnav,setFNav] = useState(false)
  const sendToLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/mario-vaquero-8a5903237/'
  };

  const sendToGIT = () => {
    window.location.href = 'https://github.com/RandomMexican'
  }

  

  return (
    <div className='flex justify-center px-4 bg-black text-white'>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-5 mt-6'>
        {/* left side with info about me */}
        <div className=''>
          <p>
            Mario Vaquero
          </p>
          <p className='mt-1'>
            Email:
            mariovquero@gmail.com
          </p>
          <p className='mt-1'>
            Location: Brooklyn, NY
          </p>
        </div>
        {/* right side with links */}
        <div className='ml-20'>
          <button onClick={sendToLinkedin}>
            Linkedin
          </button>
          <p>

          </p>
          <button onClick={sendToGIT} className='mt-1'>
            Github
          </button>
          <p>
            {/* temp spacer */}
          </p>
          <Link to='Contact' className='mt-1'>
            Contact Me
          </Link>
        </div>
        <div>
          {/* another temp spacer */}
        </div>
      </div>
    </div>
  )
}

export default Footer