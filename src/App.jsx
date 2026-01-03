import React, { useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard'
import { setLocalStorage , getLocalStorage} from './utils/LocalStorage'
const App = () => {
  
  const [user, setUser] = useState(null)

  const handelLogin=(email,password)=>{
    if (email=='admin@me.com' && password=='123'){
        console.log("this is admin");
        setUser('admin')
        
    }
    else if (email=='user@me.com' && password=='123'){
        console.log("this is employee");
        setUser('employee')
        
    }
    else{
      alert("Invalid email or password ")
    }
  }

  return (
    <>
    {!user ? <Login handelLogin={handelLogin} />:""}
    {user=='admin' ? <AdminDashboard />:<EmployeeDashboard />}
    

    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard />  */}
    
    </>
  )
}

export default App
