import React from 'react'

const Employee_Task = () => {
    return (
        <div className=' flex gap-7 h-30 px-10 my-10 items-center  justify-evenly'>
            <div className=' flex flex-col justify-between bg-blue-400 h-24 w-1/4 rounded-xl '>
                <h2 className='font-extrabold text-3xl pl-10 pt-4'>0</h2>
                <h3 className='font-bold pb-3 pl-10 text-xl '>New Task</h3>
            </div>
            <div className='bg-lime-600 h-24 w-1/4 rounded-xl '>
                <h2 className='font-extrabold text-3xl pl-10 pt-4'>0</h2>
                <h3 className='font-bold pb-3 pl-10 text-xl '>Completed</h3>

            </div>
            <div className='bg-yellow-500 h-24 w-1/4 rounded-xl '>
                <h2 className='font-extrabold text-3xl pl-10 pt-4'>0</h2>
                <h3 className='font-bold pb-3 pl-10 text-xl '>Accepted</h3>

            </div>
            <div className='bg-orange-400 h-24 w-1/4 rounded-xl '>
                <h2 className='font-extrabold text-3xl pl-10 pt-4'>0</h2>
                <h3 className='font-bold pb-3 pl-10 text-xl '>Failed</h3>

            </div>
        </div>
    )
}

export default Employee_Task
