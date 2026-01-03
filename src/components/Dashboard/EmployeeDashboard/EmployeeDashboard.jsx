import React from 'react'
import Header from '../../../others/Header'
import Employee_Task from './EmployeeTask'
import TaskList from './TaskList'
const EmployeeDashboard = ({data}) => {
  console.log(data);
  
  return (
    <div className='h-screen w-full flex flex-col  gap-4 ' >
      <Header data={data} />
      <Employee_Task data={data}/>
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
