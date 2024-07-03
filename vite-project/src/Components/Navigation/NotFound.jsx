import React from 'react'

const NotFound = () => {
  return (
    <div name='NotFound' className='w-full h-screen bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-9xl'>404</p>
        <p>Page not Found or missing</p>
      </div>
    </div>
  )
}

export default NotFound