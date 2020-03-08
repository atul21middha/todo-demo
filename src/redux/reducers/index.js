import {combineReducers} from "redux";
import Todo from "./Todo";

const reducers = combineReducers({
todo: Todo
});

export default reducers;