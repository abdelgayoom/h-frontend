import React from 'react'
import Comment from './Comment'

const CommentList = (comments)=>{
    return(
        <ul>
        {comments.map((comment)=>
            <li><Comment comment={comment}/></li>
        )}
        </ul>
    )
    
    
}

export default CommentList