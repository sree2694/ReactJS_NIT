import React from "react";

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