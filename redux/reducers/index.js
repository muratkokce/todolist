import { combineReducers } from 'redux';
import toDos from './toDos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    toDos,
    visibilityFilter,
})