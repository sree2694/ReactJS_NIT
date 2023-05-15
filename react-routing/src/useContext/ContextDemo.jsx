import React, { useContext, useState } from "react";

let UserDetailsContext = React.createContext(null);

export function VideoComponent(){
    const context = useContext(UserDetailsContext);
    return(
        <div className="bg-danger text-white p-2">
            <h2>Video Component - {context.UserName}</h2>
        </div>
    )
}


export function Home(){
    const context = useContext(UserDetailsContext);
    return(
        <div className="bg-warning text-dark p-3">
            <h2>Home Component - {context.UserName}</h2>
            <VideoComponent />
        </div>
    )
}

export function ContextDemo()
{
    const [userName, setUserName] = useState({UserName:''});

    function handleChange(e){
        setUserName({
            UserName: e.target.value
        })
    }

    return(
        <div className="container-fluid bg-dark p-4 m-4 text-white">
            Name: <input type="text" onChange={handleChange} />
           <UserDetailsContext.Provider value={{UserName:userName.UserName}}>
                <h2>Parent Component</h2>
                <Home/>
           </UserDetailsContext.Provider>
        </div>
    )
}