import React from "react";

export class ToolbarTemplate extends React.Component
{
     constructor(props){
        super();
     }
     render(){
         if(this.props.layout=="vertical"){
            return(
                <nav>
                   <div className="btn-group-vertical">
                        <button className="btn btn-danger mb-2"> <span className="bi bi-facebook"></span> Facebook</button>
                        <button className="btn btn-danger mb-2"> <span className="bi bi-twitter"></span> Twitter</button>
                        <button className="btn btn-danger mb-2"> <span className="bi bi-linkedin"></span> Linked In</button>
                        <button className="btn btn-danger mb-2"> <span className="bi bi-instagram"></span> Instagram</button>
                   </div>
                </nav>
            )
         } else {
            return(
                <nav className="d-flex">
                    <div className="bi bi-facebook me-3"></div>
                    <div className="bi bi-twitter me-3"></div>
                    <div className="bi bi-linkedin me-3"></div>
                    <div className="bi bi-instagram me-3"></div>
                </nav>
            )
         }
     }
}

export class ConditionalRender extends React.Component
{
     constructor(){
        super();
        this.state = {
             viewLayout: ''
        }
     }
     handleLayoutChange(e){
         this.setState({
            viewLayout: e.target.value
         })
     }
     render(){
        return(
            <div className="container-fluid">
                <h2>Select a Toolbar Layout</h2>
                <div className="w-25">
                    <select onChange={this.handleLayoutChange.bind(this)} className="form-select">
                        <option value="-1">Select Layout</option>
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical">Vertical</option>
                    </select>
                </div>
                <h3>Toolbar</h3>
                <ToolbarTemplate layout={this.state.viewLayout}/>
            </div>
        )
     }
}