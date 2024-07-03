import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navigation/Navbar'
import Footer from './Navigation/Footer'



const Root = () => {
  return (
    <div>
        {/* Navigation bar for the site */}
        <div>
            <Navbar/>
        </div>
        
        {/* where all pages will load  ex: Home, Resume etc*/}
        <div >
            <Outlet/>
        </div>

        {/* Footer holding contact information and another button for contact me page */}
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Root