import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/emaan378')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setdata(data)
    //         })

    // }, [])
    // First renders the page empty
// Then fetches data
// Then re-renders with data
// Causes a loading flicker

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img  src={data.avatar_url} alt={data.name}  width={250} />
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const response=await fetch('https://api.github.com/users/emaan378')
    // const data=await response.json()
    // return data
    return response.json()
}
// 2. The New Way — useLoaderData
// Data is already fetched before component renders
// No loading state needed
// No useState needed
// Cleaner and faster rendering
