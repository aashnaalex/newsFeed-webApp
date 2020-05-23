import React, { useEffect } from 'react';

function NewsFeed({ post }) {


    // const data = [
    //     {
    //         title: "mahamariyil mungi maharashtra; rajyath covid maranam 3583",
    //         image: post1
    //     },
    //     {
    //         title: "chirakukalkku thee pidich veedukalilekk idichirangi; njettich pak vimanadurantham",
    //         image: post2
    //     },
    //     {
    //         title: "modiyumayulla charcha samayam paazhaakalenn pinarayi karuthi; bjpye kuthi sena",
    //         image: post3
    //     }
    // ]
    console.log("inside newsfeed", post)

    return (
        <div>
            <div style={{ display: "inline-block", marginLeft: "20px", marginTop: "20px", width: "300px", height: "500", }}>
                <div className="Post" style={{ width: "300px", height: "500", border: "1px dotted grey", marginLeft: "10px", marginTop: "20px" }}>
                    <img src={post.urlToImage} style={{ width: "300px", height: "400px", cursor: "pointer" }}></img>
                    <a href={post.url} target="_blank" style={{ fontFamily: "cursive", marginLeft: "5px" }}>{post.title.slice(0, 50)}</a>
                </div>
            </div>


        </div>
    )

}




export default NewsFeed;
