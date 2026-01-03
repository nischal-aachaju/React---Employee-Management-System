import React, { useState } from 'react'
import Header from '../../../others/Header'
import { CircleArrowLeft } from 'lucide-react';
import AdminTaskList from './AdminTaskList';
const AdminDashboard = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("")
    const [employee, setEmployee] = useState("")
    const [category, setCategory] = useState("")

    const SubmitHandeler = (e) => {
        e.preventDefault()
        // console.log("emaitext is",emaitext );
        // console.log("password is ", password);
        setTitle("")
        setDescription("")
        setDate("")
        setEmployee("")
        setCategory("")
    }
    return (
        <div className='h-screen'>
            <Header />
            <div className=' flex '>
                <form
                    onSubmit={(e) => {
                        SubmitHandeler(e)
                    }}
                    className='h-ful w-full flex flex-col px-10 '>
                    <div className='h-16 w-full flex  py-3 gap-3' ><CircleArrowLeft size={38} /><h4 className='font-bold text-3xl'>  Create Task</h4></div>
                    <div>
                        <label className='font-bold text-lg' name="title" >Task Title</label> <br />
                        <input name='title'
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            value={title}
                            required className='outline-none  rounded bg-gray-800 h-9 w-150 px-4 mb-3 ' type="text" placeholder='Enter task' />
                        <br />
                        <label className='font-bold text-lg' name="description" >Descripton</label> <br />
                        <textarea name='desc'
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            value={description}
                            required className='outline-none  rounded bg-gray-800 h-35 w-150 px-4 mb-3 ' type="text" placeholder='Enter description' />
                        <br />

                        <label className='font-bold text-lg' name="title">Date</label> <br />
                        <input name='date'
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            value={date}
                            required className='outline-none  rounded bg-gray-800 h-9 w-150 px-4 mb-3 ' type="date" />
                        <br />
                        <label className='font-bold text-lg' name="title">Assigh To</label> <br />
                        <input name='text'
                            onChange={(e) => {
                                setEmployee(e.target.value);
                            }}
                            value={employee}
                            required className='outline-none  rounded bg-gray-800 h-9 w-150 px-4 mb-3 ' type="text" placeholder='Employee' />
                        <br />
                        <label className='font-bold text-lg' name="title">Category</label> <br />
                        <input name='text'
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            value={category}
                            required className='outline-none  rounded bg-gray-800 h-9 w-150 px-4 mb-3 ' type="text" placeholder='High ,medium,low' />
                        <br />

                        <button className="cursor-pointer bg-gray-700 h-10  w-40   rounded-[20px] text-xl font-medium
                                         border-4 border-black/2 shadow-xs shadow-white/10 active:scale-96
                                         transition-all duration-100 ">
                            submit</button>
                    </div>
                </form>
                <div className='h-155 w-400 pt-16'>
                    <AdminTaskList />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
