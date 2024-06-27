import React from 'react'

function Resume() {
  return (
    <div name='Resume' className='w-full md:h-[1500px] bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white' >
      <div className='flex flex-col justify-center items-center w-full h-full overflow-auto'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-5'>
          {/* HEADER BASICALLY */}
          <div className='sm:text-left md:text-2xl sm:text-1xl'>
            <ul>
              <li>Mario Vaquero</li>
              <li>Brooklyn, New York | 347-420-6588 | mariovquero@gmail.com</li>
            </ul>
          </div>
          <div className='px-6'>
            <p>
            Experienced in Python with Flask and JavaScript-based programming, 
            with a strong background in Game Development. 
            Possess excellent communication and documentation skills, 
            facilitating better information sharing within SWE companies. 
            Seeking opportunities to leverage my technical expertise and creative problem-solving abilities in a dynamic environment.
            </p>
          </div>

          {/* SKILLS LISTED */}
          <div className='sm:text-left text-2xl font-bold'>
            <p>TECHNICAL SKILLS</p>
          </div>
          <div>
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

          {/* SWE PROJECTS */}
          <div className='sm:text-right text-2xl font-bold inline border-b-4 border-grey'>
            <p>
              Game Developer Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume