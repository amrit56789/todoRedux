import { combineReducers } from "redux"
import { todoReducers } from "./todoApp/reducers/operations"
export const rootReducer = combineReducers({
    todoReducers
})