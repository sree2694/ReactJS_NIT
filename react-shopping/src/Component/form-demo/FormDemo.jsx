import { useState } from "react";


export function FormDemo(){

    const [userDetails, setUserDetails] = useState({"UserName":"", "Age":0, "City":"", "Mobile":""});
    const [errors, setErrors] = useState({"UserName":"", "Age":"", "City":"", "Mobile":""});


    function handleNameChange(e){
       if(e.target.value==""){
          setErrors({
            UserName: "User Name Required",
            Age: errors.Age,
            City: errors.City,
            Mobile: errors.Mobile
          })
       } else {
            setErrors({
                UserName: ""
            })
            setUserDetails({
                UserName: e.target.value,
                Age: userDetails.Age,
                City: userDetails.City,
                Mobile: userDetails.Mobile
            })
       }
    }

    function handleAgeChange(e){
        if(isNaN(e.target.value)){
            setErrors({
                Age: "Age must be a number"
            })
        } else {
            setErrors({
                Age: ""
            })
            setUserDetails({
                UserName: userDetails.UserName,
                Age: e.target.value,
                City: userDetails.City,
                Mobile: userDetails.Mobile
            })
        }
    }

    function handleCityChange(e){
       if(e.target.value=="-1") {
          setErrors({
            City: "Please Select your city"
          })
       } else {
         setErrors({
            City: ""
         })
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            City: e.target.value,
            Mobile: userDetails.Mobile
        })
       }
    }
    function handleMobileChange(e){
         if(e.target.value.match(/\+91\d{10}/)) {
            setUserDetails({
                UserName: userDetails.UserName,
                Age: userDetails.Age,
                City: userDetails.City,
                Mobile: e.target.value
            })
            setErrors({
                Mobile: ""
            })
         } else {
            setErrors({
                Mobile: "Invalid Mobile"
            })
         }
    }


    function handleFormSubmit(e){
      e.preventDefault();
      alert(JSON.stringify(userDetails));
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={handleFormSubmit}>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} name="UserName"/></dd>
                <dd className="text-danger">{errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text" name="Age" onChange={handleAgeChange}/></dd>
                <dd className="text-danger">{errors.Age}</dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={handleCityChange}>
                        <option value="-1">Choose City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select>
                </dd>
                <dd className="text-danger">{errors.City}</dd>
                <dt>Mobile</dt>
                <dd>
                    <input type="text" name="Mobile" onChange={handleMobileChange}/>
                </dd>
                <dd className="text-danger">{errors.Mobile}</dd>
            </dl>
            <button>Register</button>
            </form>
        </div>
    )
}