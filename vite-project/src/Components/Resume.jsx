import React from 'react'

function Resume() {
  return (
    <div name='Resume' className='w-full h-screen bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white justify-center max-w-[1000] grid sm:grid-cols-2 gap-8 px-4'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-5'>
          <div className='sm:text-left text-2xl'>
          Mario Vaquero
          Brooklyn, NewYork| 347-420-6588 | mvaquero143@gmail.com
          LinkedIn | Github | Blog |
          </div>
          <div className='px-6'>
            <p>
              I am experienced in Python with Flask and JavaScript-based programming and have a background in Game Development. Possesses strong skills in communication and documentation that help SWE companies communicate and share information a lot easier.
            </p>
          </div>
          
          
          <div className='sm:text-left text-2xl'>
          TECHNICAL SKILLS
          </div>
          <div>
            <p>
              {/* switch with Icons so it looks nicer */}
            Python with Flask, SQL, JavaScript, React, Unity3D, and 2D, C#
            </p>
          </div>

          <div className='sm:text-left text-2xl'>
            TECHNICAL PROJECTS
          </div>
          <div>
            <p className='font-bold sm:text-right text-2xl'>
              Game Dev Portfolio
            </p>
            <p>
              <ul className=''>
                <li>Made using HTML CSS and JavaScript</li>
                <li>CSS to style</li>
                <li>HTML makes up the basic structure</li>
                <li>JavaScript is used to make use of the events and edit the db.json</li>
              </ul>
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Resume