import React from 'react'

const Aboutme = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[100px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className=' text-4xl font-bold inline border-b-4 border-grey'>
              About
            </p>    
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hello, my name is Mario V. Take a look around my site</p>
          </div>
          <div>
            <p>
              I am a full Stack, with a focus on backend, and Video Game developer, only with Unity 2D and 3D at the moment.
              Currently trying to learn Tailwind CSS, actually used it to style this site, and Express.JS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme