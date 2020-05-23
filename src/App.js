import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Layout from './Components/Layout';
import NewsFeed from './Components/NewsFeed';

function App({addFeed}) {

  const [posts, setPosts] = useState([]);

function addFeed ( )  {
    console.log("addfeed")
    console.log("posts",posts) 
}

  return (
    <div>
      
    <Layout setPosts = {setPosts}></Layout>
    <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "150px"}}>
    {posts.map((post, index) =>(
        <NewsFeed key = {index} post = {post} ></NewsFeed>
      ))}
      </div>
   </div>
  )
}

export default App;
