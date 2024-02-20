import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions";
const initialState = [

];
export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_ALL:
            return []
        case REMOVE_TODO:
            const deleteTodo = state.filter((todo) => todo.id !== action.payload)
            return deleteTodo
        case UPDATE_TODO:
            let data = action.payload
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id
                    item.todo = data.todo
                    item.completed = data.completed
                }
                updatedArray.push(item);
            })
            return updatedArray
        case UPDATE_CHECKBOX:
            let todoArr = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                }
                todoArr.push(item)
            })
            return todoArr
        default: return state
    }
}