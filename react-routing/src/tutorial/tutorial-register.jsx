import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function TutorialRegister()
{
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            "UserId": "",
            "UserName":"",
            "Password":"",
            "Age": 0,
            "Email":"",
            "Mobile":""
        },
        onSubmit : (values) =>{
            axios({
                method: "post",
                url: "http://127.0.0.1:5000/registercustomer",
                data: values
            })
            alert("Registered Successfully..");
            navigate("/login");
        }
    })
    return(
        <div>
            <h3>Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}