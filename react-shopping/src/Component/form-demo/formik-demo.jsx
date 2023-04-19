import { useFormik } from "formik";

export function FormikDemo()
{
    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Age": 0,
            "City":"",
            "Mobile":""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
           <form onSubmit={formik.handleSubmit}>
           <h2>Register - Formik Form</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={formik.handleChange} name="UserName"/></dd>
                <dt>Age</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                <dt>City</dt>
                <dd>
                    <select onChange={formik.handleChange} name="City">
                        <option>Choose City</option>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd>
                    <input type="text" onChange={formik.handleChange} name="Mobile" />
                </dd>
            </dl>
            <button>Register</button>
           </form>
        </div>
    )
}