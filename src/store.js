import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, middleware);

export default store;