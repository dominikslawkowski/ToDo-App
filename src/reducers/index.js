import {combineReducers} from 'redux';

import ToDoListReducer from './reducer_todo_list';
import CurrentTaskReducer from './reducer_current_task';

const rootReducer = combineReducers({
    ToDoList: ToDoListReducer,
    CurrentTask: CurrentTaskReducer
});

export default rootReducer;