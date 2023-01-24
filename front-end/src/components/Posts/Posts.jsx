import React from 'react'
import "./Posts.css"
import Post from "../Post/Post.jsx"
function Posts({posts}) {
  return (
    <div className='postCenter'>
        <div className='posts'>
          { posts.map((p)=>(
              <Post post = {p}/>
          ))}
        </div>
    </div>

  )
}

export default Posts