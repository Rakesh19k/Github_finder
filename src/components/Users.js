import React from 'react'


const Users = ({users}) => {
    return (
        <div className="row justify-content-center m-auto mt-5">      
            <div className="col-sm-3">
                <div key={users.key} className="card">
                    <img className="card-img-top" src={users.avatar_url} alt={users.login}/>
                        <div className="card-body">
                            <h4 className="card-title">
                                {users.login}
                            </h4>
                            <p className="paragraph">
                                {users.name}
                            </p>
                            <a href="#">
                                <button className="btn btn-secondary" type="button" >More</button>
                            </a>
                        </div>
                </div>
            </div>    
        </div>
    )
}

export default Users;