import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-l from-indigo-600 via-indigo-900 to-purple-950 text-white flex justify-center items-center p-4'>
      
        <form method='POST'action='https://getform.io/f/d4f19e92-7957-4b59-9626-4f2770fe572b' className='flex flex-col max-w-[600px] w-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-white text-white'>
              Contacts
            </p>
            <p className='py-4'>Submit the form below or shoot me an email - mvaquero143@gmail.com</p>
            
            
          </div>
          <input className='p-2 text-black'type='text' placeholder='Name' name='name'/>
          <input className='my-4 p-2 text-black' type='email' placeholder='Email' name='Email'/>
          <textarea className='p-2 text-black'name='message'rows='10' placeholder='Message'></textarea>
          <button className='border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-purple-500'>Send</button>
        </form>
      
    </div>
  )
}

export default Contact