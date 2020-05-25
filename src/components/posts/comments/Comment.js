import React from 'react'

const Comment = ({user, date_comment, comment})=>{
    return(
        <div className="comment">
            <p>{comment}</p>
            <p>commented by {user} <small>{date_comment}</small></p>
        </div>
    )
}

export default Comment