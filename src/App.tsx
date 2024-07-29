import Company from './components/valtio/Company'
import { AddDepartment } from './components/valtio/AddDepartment'
import { AddTodo } from './components/valtio/AddTodo'
import { Todos } from './components/valtio/Todos'

function App() {
  return (
    <>
      <div style={{background:'white ',width:"1000px",height:'1000px'}}>
      <div><AddDepartment/></div>
        
         <div><Company/></div>
         <div>Todo</div>
         <AddTodo/>
         <Todos/>
      </div>
     
    </>
  )
}

export default App
