import React, {useState} from 'react'
import Axios from "axios"
import Users from "./Users"
import ProfileDetails from './ProfileDetails'

const Search = () => {
    const [user, setUser] = useState({})
    const [username,  setUsername] = useState("")
    const [error, setError] = useState("")
    const [Loading , setLoading]=useState(true)
    const [direct , setDirect] = useState(false)
    const [direct1 , setDirect1] = useState(true)
    


    const onChangeHandler = (e) => {
        const regex = /[A-Za-z]/
        const re = /^[0-9\b]+$/;
        if ((e.target.value === '' || regex.test(e.target.value)) || (e.target.value === '' || re.test(e.target.value))) {
            setUsername(e.target.value)
        }
        else{
            alert('nhi hai')
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        setLoading(true)
        Axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            console.log(res.data, "uuuuuuuuuuuuuuuuu")
            setUser(res.data)
            // // console.log(user, "Your Data")
            setLoading(false)
            setDirect (true)
            setDirect1(false)
            setError('')
           
        }).catch(err =>{
            setLoading(false)
            setError("Invalid Name!")
        })
    }   


    


    const Details = () => {
        if(Loading){
            return(
                <div className="d-flex justify-content-center mt-5">
                    <h3>Loading.....</h3>
                </div>
            )
        } else{
            return(
                <>
                    {/* <Users users={user}/> */}
                    <ProfileDetails users={user} username={username} direct={direct1}/>
                </>
                
            )
        }
        
    }
    
    return (
        <>
            <div className="container search mt-4 mb-4">
                <input className="w-50 pl-3" style={{height:36}} type="text" placeholder="Search Github Id" value={username} onChange={onChangeHandler}/>
                <button className="ml-2 mb-1 btn btn-primary" type="submit" onClick={submitHandler}>Search</button>
            </div>
            {direct? <div className="mb-5">{Details()}</div> : null}  
            {error? <h3 className="search">{error}</h3> :null}
             
        </>
    )
    
   
}



export default Search
