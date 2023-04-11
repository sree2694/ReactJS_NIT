import React from "react";

export class LoginClassComponent extends React.Component
{
      constructor(){
         super();
         this.state = {
            title : "Categories List",
            categories : ["Electronics", "Footwear", "Fashion"]
         }
      }
      render(){
        return(
            <React.Fragment>
               <div className="container-fluid">
               {/* To Set state dynamically react component provides */}
               <h2>{this.state.title}</h2>
               <ol>
                  {
                    this.state.categories.map((category)=>
                     <li key={category}>{category}</li>
                    )
                  }
               </ol>
               </div>
            </React.Fragment>
        )
      }
}