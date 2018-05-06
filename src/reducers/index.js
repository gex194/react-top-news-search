import {combineReducers} from 'redux';
import newsReducer from './rd_news';

const allReducers = combineReducers({
    news: newsReducer
})

export default allReducers;