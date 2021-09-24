import {combineReducers} from 'redux';
import historyReducer from './historyReducer';
export default combineReducers({
	hist: historyReducer
});