import {applyMiddleware ,compose,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import {addTodoReducer} from './reducers'

const store = createStore(addTodoReducer,composeWithDevTools(applyMiddleware(logger )))
    
export default store

