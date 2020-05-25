import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducer from './reducers/allReducer';

const initialState = {}
const middleware = [thunk]


const store = createStore({

})