import React from 'react'

const AdminTaskList = () => {
    return (

        <div>
            <div className='  relative bg-red-400 py-2 px-4 rounded-2xl m-5'>
                <h5 className='bg-green-600 px-2 absolute top-2 right-5 w-fit rounded'>Status</h5>
                <h2 className='font-bold text-2xl'>Nirjal</h2>
                <h3>Make UI Desighn</h3>
            </div>
                <div className='  relative bg-yellow-500 py-2 px-4 rounded-2xl m-5'>
                <h5 className='bg-green-600 px-2 absolute top-2 right-5 w-fit rounded'>Done</h5>
                <h2 className='font-bold text-2xl'>Nirmal</h2>
                <h3>Make UI Desighn</h3>
            </div>
            <div className='  relative bg-lime-600 py-2 px-4 rounded-2xl m-5'>
                <h5 className='bg-yellow-600 px-2 absolute top-2 right-5 w-fit rounded'>pending</h5>
                <h2 className='font-bold text-2xl'>Pramish</h2>
                <h3>Make UI Desighn</h3>
            </div>
            <div className='  relative bg-red-400 py-2 px-4 rounded-2xl m-5'>
                <h5 className='bg-red-600 px-2 absolute top-2 right-5 w-fit rounded'>remaining</h5>
                <h2 className='font-bold text-2xl'>Hari</h2>
                <h3>Make UI Desighn</h3>
            </div>
            <div className='  relative bg-blue-400 py-2 px-4 rounded-2xl m-5'>
                <h5 className='bg-green-600 px-2 absolute top-2 right-5 w-fit rounded'>Status</h5>
                <h2 className='font-bold text-2xl'>Sandesh</h2>
                <h3>Make UI Desighn</h3>
            </div>
        </div>


    )
}

export default AdminTaskList
