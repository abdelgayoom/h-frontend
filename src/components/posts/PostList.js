import React from 'react'
import Post from './Post'

const PostList = ({posts})=>{

    return(
        <ul>
            {posts.map((post)=>
            <li key={post.id}>
            <Post post={post}/>
            </li>
            )}
        </ul>
    )
}

export default PostList