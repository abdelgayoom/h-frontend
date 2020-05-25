import React from 'react'
import Comment from './Comment'

const CommentList = ({comments})=>{
    return(
        <div className="commentslist">
            {comments.map((comment,i) =>
            <p key={i}><Comment {...comment}/></p>
            )}
        </div>  
    )  
}

export default CommentList