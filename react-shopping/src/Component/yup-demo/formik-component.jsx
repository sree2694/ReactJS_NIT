import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikComponent()
{
    return(
        <div className="container-fluid">
            <h2>Formik Components</h2>
            <Formik
              initialValues={{
                  "UserName":"",
                  "Age": 0,
                  "City":"",
                  "Mobile":""
              }}

              onSubmit={
                 (values)=>{
                    alert(JSON.stringify(values));
                 }
              }

              validationSchema={
                 yup.object({
                    "UserName": yup.string().required("Name Required")
                                   .min(4, "Name too short")
                                   .max(10, "Name too long"),
                    "Age": yup.number().required(),
                    "Mobile": yup.string().required().matches(/\+91\d{10}/,"Invalid Mobile")
                 })
              }
            >
                {
                    props =>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName"/></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                            <dt>Age</dt>
                            <dd><Field type="text" name="Age"/></dd>
                            <dd className="text-danger" ><ErrorMessage name="Age"/></dd>
                            <dt>City</dt>
                            <dd>
                                <Field as="select">
                                    <option>Choose City</option>
                                    <option>Delhi</option>
                                    <option>Hyd</option>
                                </Field>
                            </dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" /></dd>
                            <dd className="text-danger"><ErrorMessage  name="Mobile"/></dd>
                        </dl>
                        <button disabled={!props.isValid}>Register</button>
                        <button disabled={!props.dirty}>Save</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}