import React,{Fragment} from 'react';
import PostList from './posts/PostList'
import Header from './layout/Header';
import store from '../store'
import {Provider} from 'react-redux'
import '../App.css'



const App = ()=> {
  return(
    <Provider store={store}>
      <Fragment>
       <Header/>
       <PostList />
      </Fragment>
    </Provider>
  )
}

export default App;
