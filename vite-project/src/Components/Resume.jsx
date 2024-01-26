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
          
          
          <div className='sm:text-left text-2xl font-bold'>
          TECHNICAL SKILLS
          </div>
          <div>
            <p>
              {/* switch with Icons so it looks nicer */}
            Python with Flask, SQL, JavaScript, React, Unity3D, and 2D, C#
            </p>
          </div>

          <div className='sm:text-right text-2xl font-bold inline border-b-4 border-grey'>
            TECHNICAL PROJECTS
          </div>
          <div></div>
          <p className='font-bold sm:text-left text-2xl'>
              Game Dev Portfolio
          </p>
          <div className='items-center'>
            <p>
              Portfolio showing some games I developed early in my career 
            </p>
            <p>
              <ul className='list-disc'>
                <li>Made using HTML CSS and JavaScript</li>
                <li>CSS to style</li>
                <li>HTML makes up the basic structure</li>
                <li>JavaScript is used to make use of the events and edit the db.json</li>
              </ul>
            </p>
          </div>

          <p className='font-bold sm:text-left text-2xl inline border-b-4 border-grey'>
            Simulations GUI
          </p>
          <div>
            <p>
              Program made using only Python that shows off different simulations
            </p>
            <p>
              <ul className='list-disc'>
                <li>Developed GUI to show different simulations</li>
                <li>Current Simulations: Solar System, Sand/Gravity, and Conway's Game of Life</li>
              </ul>
            </p>
          </div>

          <p className='font-bold sm:text-left text-2xl inline border-b-4 border-grey'>
            Video Game Viewer
          </p>
          <div>
            <p>
              Site made with my classmate Miguel, shows a list of games and some information on them
            </p>
            <p>
              <ul className='list-disc'>
                <li>Guided our project to list everything in out database properly</li>
                <li>Programmed with React to show the information my team gathered</li>
              </ul>
            </p>
          </div>

          <p className='font-bold sm:text-left text-2xl inline border-b-4 border-grey'>
            Neon Tails
          </p>
          <div>
            <p>
              Online art gallery for cat, dog, and cyberpunk-related images.
            </p>
            <p>
              <ul className='light-disc'>
                <li>Developed the backend of this Site using SQL, Flask, and bcrypt</li>
                <li>Handled the dummy data in our database for the frontend to access</li>
              </ul>
            </p>
          </div>

          <p className='font-bold sm:text-left text-2xl inline border-b-4 border-grey'>
            Goofy Racers
          </p>
          <div>
            <p>
              3D multiplayer racing game made entirely in Python
            </p>
            <p>
              <ul className='light-disc'>
                <li>Using the Ursina Game Engine for the gameplay</li>
                <li>Using Ursina Networking to develop the multiplayer</li>                
              </ul>
            </p>
          </div>
          <div className='sm:text-right text-2xl font-bold'>
            Experience
          </div>
          <div>
            <p className='font-bold sm:text-left text-2xl inline border-b-4 border-gray-50'>
              Urban Arts Partnership Manhattan New York
            </p>
            <p className=' inline border-b-4 border-grey'>
              Assistant Teaching Artist           June 2020-Present
            </p>
            <p>
              <ul className='light-disc'>
                <li>Help Teach Game Design and Development in Unity 2D and 3D</li>
                <li>Led Course on 5 weeks about Game Design Fundamentals</li>
              </ul>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume