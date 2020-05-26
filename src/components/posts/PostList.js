import React, { useState, useEffect } from 'react'
import Post from './Post'

const PostList = ()=>{

const [posts, SetPosts] = useState([])

useEffect(()=>{

 fetch('http://127.0.0.1:8000/api/v1/post/')
.then(res => res.json())
.then(data => SetPosts(data))
.catch(error => console.log(error));

},[])

    return(
        <div className="postlist">
            {posts.map((post)=>
            <p><Post key={post.id}{...post}/></p>
            )}
        </div>
    )
}

export default PostList