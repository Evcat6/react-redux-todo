import { v4 as uuidv4 } from 'uuid';

const initState = [
    
    
    {
        id: uuidv4(),
        description: "fehtre",
        complete: false
    },
    {
        id: 1,
        description: "fehtdgre",
        complete: false
    },
    {
        id: uuidv4(),
        description: "fehftre",
        complete: false
    },
    
]



const taskReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_TASK":
            const { id, description, complete } = action.payload;
            return [
                ...state,
                { id, description, complete }
            ]
        case "DELETE_TASK":
            const newList = state.filter(item => item.id !== action.id)
            return [ ...state = newList ]
        default:
            return state;
    }
}


export default taskReducer; 