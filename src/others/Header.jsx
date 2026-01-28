import React, { useState } from 'react'

const Header = ({data}) => {
  // console.log(data.firstName);
  const [userData, setUserData] = useState(data)
  return (
    <div className=' px-10 py-3 h-28 w-full flex justify-between items-center bg-gray-700'>
        <h1 className='text-xl'>Hello, <br /> <span className='tracking-wider text-3xl font-extrabold'>{data.firstName}👋</span></h1>
        <button  className=' bg-red-500 px-4 pt-1 pb-2 rounded font-bold '>Log Out</button>
        
      
    </div>
  )
}

export default Header
