import React,{useState} from "react";
import { LoginComponent } from "../customized-components/login-component"
import { GridComponent } from "../customized-components/grid-component"
export function HomeComponent(){
    const [products] = useState([{Name:"TV", Price:66000.33},{Name:"Mobile", Price:42000.33}]);
    return(
        <div className="container-fluid">
    <h2>Admin Portal</h2>
    <LoginComponent title="Admin Login" login_id="Your Email" login_type="email" button_text="Admin Login" />
    <h2>Customer Portal</h2>
            <LoginComponent title="Customer Login" login_id="Your Mobile" login_type="text" button_text="Customer Signin" />
            <GridComponent caption="Employee Table" fields={["First Name", "Last Name", "Salary"]} data={[{'FirstName':'Raj', 'LastName':'Kumar', 'Salary':56000.44},{'FirstName':'Tom', 'LastName':'Hanks','Salary':67000.44}]} />
             <hr />
             <GridComponent caption="Products List" fields={["Name","Price"]} data={products} />
        </div>
        
    )
}