import React from 'react'

function Resume() {
  return (
    <div name='Resume' className='w-full md:h-[1500px] bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white' >
      <div className='flex flex-col justify-center items-center w-full h-full overflow-auto'>
        <div className='flex flex-col justify-center items-center h-50 overflow-auto text-center'>
          {/* HEADER BASICALLY */}
          <div className=' sm:text-left md:text-2xl sm:text-5xl'>
            <h2 className='text-center md:text-5xl'>
              Mario Vaquero
            </h2>

            {/* <ul> */}
              {/* <li className='text-center md:text-5xl'>Mario Vaquero</li> */}
              {/* <li>Brooklyn, New York | 347-420-6588 | mariovquero@gmail.com</li> */}
            {/* </ul> */}
          </div>
          <div className='px-20 mt-6'>
            <p className='font-extrabold'>
              Software Developer | Full Stack Web Development | Game Development | Object Oriented Programming
            </p>
            <p className='mt-3'>
            Experienced in Python with Flask and JavaScript-based programming, 
            with a strong background in Game Development. 
            Possess excellent communication and documentation skills, 
            facilitating better information sharing within SWE companies. 
            Seeking opportunities to leverage my technical expertise and creative problem-solving abilities in a dynamic environment.
            </p>
          </div>


          {/* SKILLS LISTED */}
          <div className='sm:text-left text-2xl font-bold mt-3'>
            <p>TECHNICAL SKILLS</p>
          </div>
          <div className='mt-3'>
            <p>
              Programming Languages: Python, JavaScript, C#, C++, SQL
            </p>
            <p>
              Frameworks & Libraries: Flask, React, Node.js, Express.js, Tailwind CSS, Unity3D, Ursina
            </p>
            <p>
              Tools & Platforms: Vite, MongoDB Atlas, bcrypt, Git
            </p>
          </div>
        </div>
        
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-5 mt-6'>

          {/* SWE PROJECTS */}
          {/* name of project */}
          <div className='sm:text-left text-2xl font-bold inline border-b-4 border-grey mt-3'>
            <p>
              Portfolio Site
            </p>
          </div>
          {/* description of project */}
          <div className=''>
            <p>
              Portfolio showing all projects I have developed along with further information about me
            </p>
            <ul className='mt-3'>
              <li>Built using React.JS, Vite, and Tailwind CSS</li>
              <li>Showcases all projects, resume, and contact information</li>
              <li>Currently in development, with assets and backend work nearly complete</li>
            </ul>
          </div>


          {/* name of project */}
          <div className='sm:text-left text-2xl font-bold inline border-b-4 border-grey mt-3'>
            <p>
              Simulations GUI
            </p>
          </div>
          {/* description of project */}
          <div>
            <p>
              Program made using only Python that shows off different simulations
            </p>
            <ul className='mt-3'>
              <li>
                Developed GUI in Python for various simulations (Solar System, Sand/Gravity, Conway’s Game of Life)
              </li>
            </ul>
          </div>

          {/* name of project */}
          <div className='sm:text-left text-2xl font-bold inline border-b-4 border-grey mt-3'>
            <p>
              Task Manager
            </p>
          </div>
          {/* description of project */}
          <div>
            <p>
              Developed Task manager using Node.js, Express.js, Javascript, and MongoDB Atlas 
            </p>
            <ul className='mt-3'>
              <li>Built using Node.js, Express.js, JavaScript, and MongoDB Atlas</li>
              <li>Developed routes and middleware for error handling and task management</li>
            </ul>
          </div>
          
          {/* name of project */}
          <div className='sm:text-left text-2xl font-bold inline border-b-4 border-grey mt-3'>
            <p>
              Neon Tails
            </p>
          </div>
          {/* description of project */}
          <div>
            <p>
              Online art gallery for cat, dog, and cyberpunk-related images. Focused on Backend
            </p>
            <ul className='mt-3'>
              <li>Online art gallery for cat, dog, and cyberpunk-related images</li>
              <li>Focused on backend development using SQL, Flask, and bcrypt</li>
            </ul>
          </div>


          {/* name of project */}
          <div className='sm:text-left text-2xl font-bold inline border-b-4 border-grey mt-3'>
            <p>
              Goofy Racers
            </p>
          </div>
          {/* description of project */}
          <div>
            <p>
              3D game I developed almost entirely by myself using Ursina and Python alone in three weeks
            </p>
            <ul className='mt-3'>
              <li>3D game developed using Ursina and Python</li>
              <li>Implemented gameplay mechanics, physics, and multiplayer networking</li>
            </ul>
          </div>
        </div>
      <div>
        <h2 className='text-center md:text-3xl font-bold border-b-4 border-grey mt-10'> EXPERIENCE</h2>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-5 mt-6'>
          <p className='sm:text-left text-2xl font-semibold'>
            Urban Arts Partnership
          </p>
          <p className='sm:text-right text-2xl font-semibold'>
            Manhattan, NewYork
          </p>
          <p className=''>
            Assistant Teaching Artist, School of Interactive Arts
          </p>
          <p className='sm:text-right'>
            june 2020 - Present
          </p>
        </div>
        <ul>
          <li className='mt-3'>Assisted in teaching Game Design and Development in Unity 2D and 3D</li>
          <li className='mt-2'>Improved teaching materials and provided clearer instructions for students</li>
          <li className='mt-2'>Led two 5-week courses on Game Design fundamentals and programming</li>
          <li className='mt-2'>Organized and assisted in events like Unreleased Games Arcade and SIA arcade</li>
        </ul>
      </div>
      
      
      </div>
    </div>
  )
}

export default Resume