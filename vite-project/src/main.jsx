import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./index.css"

import Root from './Components/Root.jsx'

// Main pages with some content
import Home from './Components/Home.jsx'
import Resume from './Components/Resume.jsx'
import Contact from './Components/Contact.jsx'


// in case stuff is lost or not released yet re direct here
import NotFound from './Components/NotFound.jsx'
import Working from './Components/Working.jsx'


// Main project page
import Projects from './Components/Projects.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/Resume",
        element: <Resume/>,
      },
      {
        path:"/Portfolio",
        element: <Projects/>,
      },
      {
        path:"/Contact",
        element: <Contact/>,
      },
      {
        path:"*",
        element: <NotFound/>,
      },
      {
        path:"/Working",
        element: <Working/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
