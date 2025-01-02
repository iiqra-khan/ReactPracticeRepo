import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/iiqra-khan')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])

    const data = useLoaderData()

    return( 
        <div className="text-center mr-4 bg-gray-400 p-4 text-3xl">Github Followers: {data.followers}
        <img src={data.avatar_url} alt="logo" width={300}/>
        </div>
    )
}

export default Github;


export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/iiqra-khan')
    return res.json()
}