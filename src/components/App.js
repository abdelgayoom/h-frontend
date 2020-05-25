import React from 'react';
import PostList from './posts/PostList'
import '../App.css'



//const posts = post.concat([post])
const App = ({ posts })=> {
  return(
    <PostList posts={posts}/>
  )
}

export default App;
