import React, {useState, useEffect} from 'react'
import Axios from "axios"
import Profile from './Profile'

function ProfileDetails({username, users}) {
    const [repo, setRepo] = useState([])
    const [direct, setDirect] = useState(false)

    useEffect (()=> {
        Axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => {
            console.log(res.data, "refskufhbhjvbc")
            setRepo(res.data)
            setDirect(true)
            // console.log(repo)
        })
        .catch(err=> {
            console.log(err)
        })
   }, [])
    return (
        <>
        {direct? <div><Profile profiledata={users} repodata={repo} /></div>:null}
        </>
    )
}

export default ProfileDetails
