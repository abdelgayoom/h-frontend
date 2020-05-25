import React from 'react'
import Post from './Post'

const PostList = ({posts})=>{

    return(
        <div className="postlist">
            {posts.map((post)=>
            <p ><Post {...post}/></p>
            )}
        </div>
    )
}

export default PostList