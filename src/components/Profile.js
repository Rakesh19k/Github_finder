import React from 'react'



function Profile({profiledata, repodata}) {
        
    return (
        <div className="container-fluid mt-4">
            <div className="row ml-3">
                <div className="col-md-4 col-12 mb-5">
                    <div className="card-body">
                        <img className="img" src={profiledata.avatar_url} alt={profiledata.login} style={{borderRadius:100, width:200, height:200}}/>
                        <h3 className="card-title mt-3">{profiledata.name}</h3>
                        <h6 className="card-title-2">{profiledata.login}</h6>
                        <p className="Bio mt-3">{profiledata.bio}</p>
                    </div>
            
                    <ul className="f-list1 d-flex fas" style={{listStyle:'none'}}>&#xf406;
                        <li className="mr-3 ml-2"><span className="badge badge-secondary" style={{borderRadius:30}}>{profiledata.followers}</span> Followers</li>
                        <li><span className="badge badge-secondary" style={{borderRadius:30}}>{profiledata.following}</span> Following</li>
                    </ul>
                    <ul className="f-list mt-4" style={{listStyle:'none'}}>
                        <li>Company :- {profiledata.company}</li>
                        <li>Location :- {profiledata.location}</li>
                        <li>Website :- {profiledata.blog}</li>
                        <li>Since :- {profiledata.created_at}</li>
                    </ul>
                    <a href={profiledata.html_url} target="_blank" rel="noreferrer">
                        <button className="btn btn-danger ml-4">View Profile</button>
                    </a> 
                </div>
                <div className="col-md-8 col-12 mt-3">
                    <ul className="repo d-flex" style={{listStyle:'none'}}>
                        <li>
                            <h4>Repositories <span className="badge badge-secondary" style={{borderRadius:30}}>{profiledata.public_repos}</span></h4>
                        </li>
                        <li className="ml-5">
                            <h4>Projects <span className="badge badge-secondary" style={{borderRadius:30}}>{profiledata.public_gists}</span></h4>
                        </li>
                    </ul>
                    <>
                        {repodata.map(repo => (
                            <div className="card my-3 repo-link"  key={repo.key}>
                                <div className="card-body">
                                    <a className="repo-link2" href={repo.html_url} style={{textDecoration:"none"}} target="_blank" rel="noreferrer">{repo.name}</a><br/>
                                    <span className="lan fas">&#xf111; {repo.language}</span>
                                    <span className="lan ml-5">Update: {repo.created_at}</span>
                                    <div style={{float:'right'}}>
                                        <span className="badge badge-success mr-1">Stars: {repo.stargazers_count}</span>
                                        <span className="badge badge-warning mr-1">Watchers: {repo.watchers_count}</span>
                                        <span className="badge badge-info">Forks: {repo.forks}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                </div>
            </div>
        </div>
    )
}

export default Profile
