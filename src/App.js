import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Layout from './Components/Layout';
import NewsFeed from './Components/NewsFeed';
// import NewsFeed from './Components/NewsFeed';

function App({addFeed}) {

  const [posts, setPosts] = useState([]);
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=b9d04a1d18b84f9ca439dc70e686dc80
 

//  useEffect(() => {
//     axios.get(urlString)
//       .then((res) => {
//         console.log(res.data)
//         setPosts(res.data.articles)
//       }).catch((err) => {
//         console.log(err)
//       })
//   }, [])

  

function addFeed ( )  {
    console.log("addfeed")
    console.log("posts",posts)
   
}

  return (
    <div>
      
    <Layout setPosts = {setPosts}></Layout>
    <div style = {{display: "flex", flexWrap: "wrap"}}>
    {posts.map((post, index) =>(
        <NewsFeed key = {index} post = {post} ></NewsFeed>
      ))}
      </div>
   </div>
  )
}




export default App;
