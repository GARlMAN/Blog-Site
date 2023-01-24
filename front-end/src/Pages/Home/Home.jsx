import React from 'react'
import "./Home.css"
import Header from "../../components/Header/Header.jsx"
import Siderbar from '../../components/Sidebar/Siderbar'
import Posts from '../../components/Posts/Posts.jsx'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useLocation } from "react-router";

function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation();

  useEffect(() =>{
    const fetchPosts = async ()=>{
      const res = await axios.get("posts/" + search);
      setPosts(res.data);
    }
    fetchPosts()

  }, [search])
  return (
    <>
    <Header />
    <div className='home'>
      <Posts posts = {posts}/>
      <Siderbar />
    </div>
    </>

  )
}

export default Home