import React from 'react'
import Header from '../../../others/Header'
import Employee_Task from './EmployeeTask'
import TaskList from './TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='h-screen w-full flex flex-col  gap-4 ' >
      <Header />
      <Employee_Task/>
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
