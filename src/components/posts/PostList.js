import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {getPost} from '../../actions/posts'


const mapStateToProps = (state) => ({
    posts: state.posts.posts
  });

const PostList = (props)=>{

    useEffect(
        props.getPost()
    ,[])

    return(
        <div className="postlist">
            {props.posts.map(post=>
            //<p><Post key={post.id}{...post}/></p>
            <p key={post.id}>{post.author}</p>
            )}
        </div>
    )
}


  
export default connect(mapStateToProps,{getPost})(PostList);
  