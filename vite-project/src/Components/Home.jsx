import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import PFP from '../assets/PFP.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div name='home'className='w-full h-screen bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            {/* <p className='px-10 border-2 py-20 w-7'> text holder for profile pic</p> */}
            <img src={PFP} alt='profile image' style={{width:'150px',height:'100'}}/>
            <p>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold '>Mario Vaquero</h1>
            
            <h2 className='text-2xl sm:text-4xl font-bold'>I am a Full Stack Web and Game Developer</h2>
            <p className='py-4 max-w-[700px]'> 
            
                only with Unity 2D and 3D at the moment. Currently trying to learn Tailwind CSS, actually used it to style this site, and Express.JS
                Which I want to use to help make the backend part of this site.
            </p>
            
            <div className='w-25'>
                <marquee behavior="scroll" direction="right" scrollamount="10">
                    <img src="/pix/samples/bee.gif" width="72" height="79" alt="Flying Bee"/>
                </marquee>
            </div>

            <div>
                <button className=' group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-500'>
                <Link to="/Portfolio">More Projects</Link>
                    <span className='group-hover:rotate-180 duration-300 group-hover:ml-4'>
                        
                        <HiArrowNarrowRight className=' group-hover:ml-0 ml-3'/>
                    </span>
                </button>
            </div>

        </div>

    </div>
  )
}

export default Home