import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Aboutme from "./Components/Aboutme"
import Resume from "./Components/Resume"


// import styles from "./style"
// import "./assets"

const App = () => {
  // className="bg-indigo-700 md:p-14 lg:p-16 xl:-20"
  return (
    <div >
      <Navbar></Navbar>
  
      <Home ></Home>
      
      
      <Aboutme></Aboutme>


      <Resume></Resume>
      


    </div>
  )
}

export default App