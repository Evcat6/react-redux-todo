import { useState} from "react";
import './TaskForm.styles.scss';
import { AiFillFolderAdd } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { addTask } from '../../store/actions'

const TaskForm = () => {

    const dispatch = useDispatch();
    const [ text, setText ] = useState('');

    const newTask = () => {
        if(!text) return alert('Please set todo');
        
        dispatch(addTask(text));
        setText('');
    }

    return (
        <form onSubmit={e => e.preventDefault()} className="task-form" >
            <input value={text} onChange={e => setText(e.target.value)} type='text' className="input" placeholder="Type something..." />
            <div className='btn-container'><button onClick={newTask} className='btn'><AiFillFolderAdd className='btn-icon' />Add Task</button></div>
        </form>
    )
}

export default TaskForm;