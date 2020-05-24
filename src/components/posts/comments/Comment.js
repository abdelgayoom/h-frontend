import React from 'react'

const Comment = ({comment})=>{
    return(
        <div className="comment">
            <p>{comment.comment}</p>
            <p>commented by {comment.user} <small>{comment.date_comment}</small></p>
        </div>
    )
}

export default Comment