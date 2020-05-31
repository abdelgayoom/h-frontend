import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import posts from './reducers/posts';

const initialState = {};

const middleware = [thunk]
const store = createStore(
 combineReducers({
    posts
 }),initialState,applyMiddleware(...middleware));

export default store;
