import React from "react";

export class LoginComponent extends React.Component
{
    componentDidMount(){
        alert(`Login Component Requested and Will mount`);
    }
    componentWillUnmount(){
        alert(`Login Component will unmount`);
    }
    render(){
        return(
            <div>
                <h2>User Login</h2>
            </div>
        )
    }
}

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

export class LifeCycleDemo extends React.Component
{
    constructor(){
        super();
        this.state = {
            View: ''
        }
    }
    handleLoginClick(){
        this.setState({
            View: <LoginComponent/>
        })
    }
    handleRegisterClick(){
        this.setState({
            View: <RegisterComponent/>
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Life Cycle Demo</h2>
                <button onClick={this.handleLoginClick.bind(this)}>Login</button>
                <button onClick={this.handleRegisterClick.bind(this)}>Register</button>
                <hr />
                {this.state.View}
            </div>
        )
    }
}