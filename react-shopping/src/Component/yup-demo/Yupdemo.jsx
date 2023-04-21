import { useFormik } from "formik";
import * as yup from "yup";

export function YupDemo(){

    const formik = useFormik({
        initialValues : {
            "UserName":"",
            "Age": 0,
            "City":"",
            "Mobile":""
        },
        onSubmit: (values)=>{
            alert(JSON.stringify(values));
        },
        validationSchema: yup.object({
            "UserName": yup.string()
                           .required("User Name Required")
                           .min(4, "Name too short..")
                           .max(10, "Name too long.."),
            "Age": yup.number()
                      .required("Age Required"),
            "Mobile": yup.string()
                         .required("Mobile Required")
                         .matches(/\+91\d{10}/, "Invalid Mobile +91 with 10 digits")
        })
    })

    return(
        <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
        <h2>Register - Formik Yup</h2>
         <dl>
             <dt>User Name</dt>
             <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName"/></dd>
             <dd className="text-danger">{formik.errors.UserName}</dd>
             <dt>Age</dt>
             <dd><input type="text" {...formik.getFieldProps("Age")} name="Age" /></dd>
             <dd className="text-danger">{formik.errors.Age}</dd>
             <dt>City</dt>
             <dd>
                 <select {...formik.getFieldProps("City")} name="City">
                     <option value="-1">Choose City</option>
                     <option value="Delhi">Delhi</option>
                     <option value="Hyd">Hyd</option>
                 </select>
             </dd>
             <dd className="text-danger"></dd>
             <dt>Mobile</dt>
             <dd>
                 <input type="text" {...formik.getFieldProps("Mobile")} name="Mobile" />
             </dd>
             <dd className="text-danger">{formik.errors.Mobile}</dd>
         </dl>
         <button>Register</button>
        </form>
     </div>
    )
}