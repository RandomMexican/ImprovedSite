import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center px-4 bg-black text-white'>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-5 mt-6'>
        {/* left side with info about me */}
        <div className='justify-center'>
          <p>
            Mario Vaquero
          </p>
          <p>
            Email:
            mariovquero@gmail.com
          </p>
        </div>
        {/* right side with links */}
        <div className=''>
          <p>
            Linkedin
          </p>
          <p>
            Contact Me
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer