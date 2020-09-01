import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const reducers = combineReducers({
	example: exampleReducer,
});

export default (state, action) => reducers(state, action);
