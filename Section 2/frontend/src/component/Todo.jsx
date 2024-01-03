import React, { useState } from 'react'

const Todo =()  =>{
    const [Todolist,setTodolist]=useState([])

    const addNewTask=(e)=>{
        console.log(e)
        if(e.code ==='Enter'){
            console.log(e.target.value)
            
            setTodolist([{text: e.target.value, completed: false},...Todolist])
            console.log([{text: e.target.value, completed: false},...Todolist]);
          

            e.target.value=""
        }

    }

    const deleteTodo=(index)  =>{
        console.log(index);
        const temp=Todolist;
        temp.splice(index,1);
        setTodolist([...temp]); 
        
    }

    const CompleteTodo =(index)  =>{
        const temp=Todolist;
        temp[index].completed = !temp[index].completed;
        setTodolist([...temp]);
        console.log(temp);
    }
 



    
  return (
    <div className='container '>
        <header className='card bg-success'><h1 className='text-center'>TO DO LIST</h1></header>
        <hr />
        <h2 className='text-center  '>Daily Task</h2>
        <hr />
        <div className='card w-50 mycard6 bg-dark'>
            <div className='card-header d-flex'>
                <input type="text" className='form-control' placeholder='Enter Task to Add' onKeyDown={addNewTask} />
                
            </div>
            <div className='card-body'>{Todolist.map((task ,index)  => {return <li className=' p-3 border border-light list-group-item d-flex justify-content-between text-light'>
                <p>{task.text}</p>
               {task.completed?(
                <span class="badge text-bg-success p-3">Completed</span>
               ):(
                <span class="badge text-bg-warning p-3">Pending</span>
               
               )}
            <div>
                <button className='btn btn-primary'onClick={() =>{CompleteTodo(index)}} >Complete</button>
                <button className='btn btn-danger ms-3 mx-2'onClick={()=>{deleteTodo(index)}}>Delete</button>
            </div>
            </li>})}
            </div>
        </div>

    </div>
  )
}

export default Todo