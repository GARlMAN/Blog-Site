import React from 'react'
import "./Single.css"
import SinglePost from '../../components/SinglePost/SinglePost'
import Siderbar from '../../components/Sidebar/Siderbar'

function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Siderbar/>
        
    </div>
  )
}

export default Single