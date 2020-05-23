import React, { useState } from 'react';
import axios from 'axios';

function Layout({ setPosts }) {

    const [variable, setVariable] = useState('');
    const [isLoading, setIsLoading] = useState();
    let urlString = ''
    const api = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q="
    const q = variable
    const apiKey = "&apiKey=7d1ae7fbafc34a61b4509e7aac489d29"


    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        axios.get(`${api}` + `${q}` + `${apiKey}`)
            .then((res) => {
                setIsLoading(false)
                console.log(res.data)
                setPosts(res.data.articles)
            }).catch((err) => {
                console.log(err)
            })
    }

    if (isLoading) {
        return <h3>Loading...</h3>
    }
    else {
        return (
            <div>
                <input type="text" placeholder="  Enter key to be searched"
                    style={{
                        width: "75%",
                        height: "50px",
                        border: "1px solid lightgrey",
                        margin: "5px 15px"
                    }}
                    onChange={(e) => (setVariable(e.target.value))}
                ></input>
                <button
                    style={{
                        border: "none",
                        width: "150px",
                        height: "50px",
                        backgroundColor: "grey",
                        fontSize: "large",
                        margin: "5px 20px"

                    }}
                    onClick={handleSubmit}
                >Search</button>
            </div>

        )
    }
}

export default Layout;
