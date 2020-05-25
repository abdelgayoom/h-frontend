import React from 'react'
import CommentList from './comments/CommentList'

const Post = ({title, subject, author, date_post, comments})=>{

    return(
        <div className="post">
            <h3>{title}</h3>
            <p>{ subject }</p>
            <p>created by {author}  <small>{date_post}</small></p>
            <CommentList comments={comments}/>
        </div>
    )
}

export default Post