import axios from "axios";
import { useEffect, useState } from "react";


const TaskList = () => {
   
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
      
    axios.get("http://localhost:3000/")
    .then((result)=>setTasks(result.data))
    .catch((err)=>console.log(err))

  },[])

  const handleDelete =(id)=>{
    axios.delete("http://localhost:3000/"+id)
    .then((result)=>{console.log(result)
      window.location.reload()
    })
    .catch((err)=>console.log(err))
  }



  return (
    <div className='w-50 bg-white rounded p-3'>
    {tasks.map((item, index) => (
      <div key={index} className="d-flex m-3">
        <h5 className="form-control">{item.task}</h5>
        <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}> Delete</button>
      </div>
    ))}

    </div>
  );
};


export default TaskList;
