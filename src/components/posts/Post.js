import React from 'react'
import CommentList from './comments/CommentList'

const Post = ({post})=>{

    return(
        <div className="post">
            <h3>{post.title}</h3>
            <p>{ post.subject }</p>
            <p>created by {post.author}  <small>{post.date_post}</small></p>
            <CommentList comments={post.comments}/>
        </div>
    )
}

export default Post