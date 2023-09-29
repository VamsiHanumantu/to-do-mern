import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import CreateTask from './CreateTask'
import TaskList from './TaskLIst'
import { BrowserRouter } from 'react-router-dom'; 


function App() {



  
  return (
   
       <div className="d-flex data-mdb-smooth-scroll bg-dark vh-100 justify-content-center flex-column align-items-center">
         <BrowserRouter>
           <CreateTask   />
            <TaskList />
         </BrowserRouter>
        
       </div>
   
  )
}

export default App
