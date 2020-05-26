import React,{Fragment} from 'react';
import {Provider} from 'react-redux'
import PostList from './posts/PostList'
import Header from './layout/Header';
import '../App.css'



const App = ()=> {
  return(
      <Fragment>
        <Header/>
        <PostList />
      </Fragment>
  )
}

export default App;
