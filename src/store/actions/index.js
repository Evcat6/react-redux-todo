import { v4 as uuidv4 } from 'uuid';

export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: {
            id: uuidv4(),
            description: task,
            complete: false
        }
    }
}



export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        id
    }
}
