import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard'
import { setLocalStorage , getLocalStorage} from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  
  const [user, setUser] = useState(null)
  const AuthData = useContext(AuthContext)
  const [loggedInData, setLoggedInData] = useState(null)
  // console.log(AuthData.employees);
// useEffect(() => {
//   const loggedInUser = localStorage.getItem("loggedInUser")
//   // console.log(loggedInUser);
  
// }, [AuthData])


  const handelLogin=(email,password)=>{
    if (AuthData && (AuthData.admin.find((e)=>email==e.email && password==e.password))){
      const admin=AuthData.admin.find((e)=>email==e.email && password==e.password) 
      if (admin){
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        setUser('admin')
        setLoggedInData(admin)
      }
    }
    else if (AuthData){
      const employee=AuthData.employees.find((e)=>email==e.email && password==e.password)
      if (employee){
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
        setUser('employee') 
        setLoggedInData(employee)
      }
      else{
      alert("Invalid email or password ")
    }
    }
    else{
      alert("Invalid email or password ")
    }

    const status=JSON.parse(localStorage.getItem('loggedInUser'))
    setUser(status.role);
    
  }

  return (
    <>
   {!user ? <Login handelLogin={handelLogin} />:user=='admin' ? <AdminDashboard data={loggedInData} />:<EmployeeDashboard data={loggedInData} />}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard />  */}
    
    </>
  )
}

export default App
