import React from "react";

export class RegisterComponent extends React.Component
{
    componentDidMount(){
        alert(`Register Component Requested and Will mount`);
    }
    componentWillUnmount(){
        alert(`Register Component will unmount`);
    }
    render(){
        return(
            <div>
                <h2>Register User</h2>
            </div>
        )
    }
}