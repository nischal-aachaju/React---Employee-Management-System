import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const SubmitHandeler = (e) => {
        e.preventDefault()
        console.log("emais is",email );
        console.log("password is ", password);
        setEmail("")
        setPassword("")
    }

    return (
        <div className='h-screen w-full '>
            <div className='flex justify-center items-center h-full w-full bg-[url(utils\login_page_background.png)]  bg-cover bg-center'>
                <div
                    className='h-2/3 w-200  rounded-4xl bg-transparent backdrop-blur-sm border border-black/5 shadow-sm shadow-black/20'>
                    <form
                        onSubmit={(e) => {
                            SubmitHandeler(e)

                        }}
                        className='h-full w-full flex justify-center items-center  flex-col gap-10 '>
                        <h4 className='font-extrabold text-4xl'>' Log In :)'</h4>
                        
                        <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        required className='outline-none border-2 rounded-full border-amber-50 h-14 w-1/2 px-10 ' type="email" placeholder='Enter E-mail' />
                       
                        <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                        required className='outline-none border-2 rounded-full border-amber-50 h-14 w-1/2 px-10' type="password" placeholder='Enter Password' />
                        <button className="cursor-pointer bg-amber-50/20 h-14  w-40   rounded-full text-xl font-medium
                                         border-4 border-black/2 shadow-xs shadow-white/10 active:scale-96
                                         transition-all duration-100 ">
                            Log In</button>
                    </form>
                </div>
                

            </div>

        </div>
    )
}

export default Login
