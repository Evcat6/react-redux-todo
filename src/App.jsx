import TaskForm from "./components/TaskForm/TaskForm.component";
import { useSelector } from "react-redux";
import Tasks from './components/Tasks/Tasks'


function App() {

  const tasks = useSelector(state => state.task);

  return (
    <div className="app-container">
      <TaskForm/>
      {tasks.length > 0  ?  <Tasks/> : <h3 className="no-tasks" >No tasks yet</h3>}
    </div>
  )
}

export default App;
