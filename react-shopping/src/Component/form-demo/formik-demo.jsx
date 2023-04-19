import { useFormik } from "formik";

export function FormikDemo()
{

    function UserVaidation(formBody)
    {
        var errors = {};

        if(formBody.UserName==""){
            errors.UserName="User Name Required";
        } else if(formBody.UserName.length<4) {
            errors.UserName="User Name too short min 4 chars required";
        } else {
            errors.UserName="";
        }

        if(isNaN(formBody.Age)){
            errors.Age = "Age must be a number";
        } else {
            errors.Age ="";
        }

        if(formBody.City=="-1"){
            errors.City = "Please Select your City";
        } else {
            errors.City = "";
        }

        if(formBody.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = "";
        } else {
            errors.Mobile = "Invalid Mobile"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Age": 0,
            "City":"",
            "Mobile":""
        },
        validate: UserVaidation,
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
                <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName"/></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>City</dt>
                <dd>
                    <select onChange={formik.handleChange} name="City">
                        <option value="-1">Choose City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
                <dt>Mobile</dt>
                <dd>
                    <input type="text" onChange={formik.handleChange} name="Mobile" />
                </dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
            <button>Register</button>
           </form>
        </div>
    )
}