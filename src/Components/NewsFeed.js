import React, { useEffect } from 'react';

function NewsFeed({ post }) {

    return (
        <div>
            <div style={{ display: "inline-block", marginLeft: "20px", marginTop: "50px", width: "300px", height: "500",boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"}}>
            <a href={post.url} target="_blank" style = {{cursor: "pointer", textDecoration: "none"}}>
                <div className="Post" style={{ width: "300px", height: "500" }}>
                    <img src={post.urlToImage} style={{ width: "300px", height: "400px"}}></img>
                     <p style={{ fontFamily: "sans-serif", color: "black", marginLeft: "5px" }}>{post.title.slice(0, 50)}</p>
                </div>
                </a>
            </div>


        </div>
    )

}




export default NewsFeed;
