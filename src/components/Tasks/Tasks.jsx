import { useSelector, useDispatch } from "react-redux"
import './Tasks.styles.scss';
import { AiFillDelete } from 'react-icons/ai'
import { deleteTask } from '../../store/actions'


const Tasks = () => {

    const tasks = useSelector(state => state.task);

    const dispatch = useDispatch();


    return (
        <ul className="container">
            {tasks.map((task, index) => (
                <li key={task.id} style={{borderRadius: index === 0 ? "5px 5px 0px 0px" : index === tasks.length - 1 ? "0px 0px 5px 5px" : ""}} >
                    <h1 className="task-title" >{task.description}</h1>
                    <AiFillDelete  className="task-delete-btn" onClick={() => dispatch(deleteTask(task.id))} />
                </li>
            ))}
        </ul>
    )
}


export default Tasks;