import React from 'react'

const NewTask = () => { 
    return (
        <div>
            <div className='shrink-0 h-66 w-90 bg-amber-600 rounded-2xl'>
                <div className='h-10 w-full flex justify-between items-center text-xs  pt-3  px-4' >
                    <h4 className='bg-red-700 px-2 rounded pb-1'>High</h4>
                    <h2 className='bg-gray-600 px-3 py-2 rounded font-semibold  ' >New task</h2>
                    <h4>20 Feb 2026</h4>
                </div>
                <div className=' h-42 w-full px-4 py-5'>
                    <h3 className='font-bold' >Make youtube video</h3>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis cupiditate ullam consequuntur, voluptatibus libero!</p>
                </div>
                <div className='h-10 flex justify-center gap-4  w-full'>
                    <button className='px-5 rounded py-2 bg-green-600'>Mark As Accepted</button>
                    <button className='px-5 rounded py-2 bg-red-600'>Mark As Rejected</button>
                </div>
            </div>
        </div>
    )
}

export default NewTask
