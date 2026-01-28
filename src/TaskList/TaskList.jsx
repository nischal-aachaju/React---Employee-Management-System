import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
const TaskList = (props) => {
    // console.log(props.data.tasks)
    return (
        <div id='TaskList' className='flex gap-8 p-10 overflow-x-auto ' >
            {/* <AcceptTask data={props.data} />
            <NewTask data={props.data}/>
            <FailedTask data={props.data} />
            <CompleteTask data={props.data} />
  */}

  {props.data.tasks.map((elem,idx)=>{
            if (elem.active){
                return <AcceptTask key={idx} data={props.data} />
            }
            if (elem.newTask){
                return <NewTask key={idx} data={props.data}/>
            }
            if (elem.completed){
                return <CompleteTask key={idx} data={props.data} />
            }
            if (elem.failed) {
                return <FailedTask key={idx} data={props.data} />
            }

    return 
  })}
        </div>
    )
}

export default TaskList
