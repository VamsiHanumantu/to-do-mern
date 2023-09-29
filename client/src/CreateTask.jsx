import { useState } from "react";

import axios from "axios"



const CreateTask = () => {

  const [task,setTask] = useState('');


  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/",{task})
    .then((result)=>{console.log(result)
       window.location.reload()
       })
    .catch((err)=>console.log(err))
  }

  

  return (
    <div className="w-50 bg-white rounded p-3">
       <h1 className='text-dark'>ToDo List</h1>
       <form onSubmit={handleSubmit} className="d-flex">
          <input type="text" placeholder="Enter Text" className="form-control" onChange={(e)=>setTask(e.target.value)}/>
          <button className="btn btn-primary m-3">ADD</button>
       </form>

    </div>
  )
}


export default CreateTask
