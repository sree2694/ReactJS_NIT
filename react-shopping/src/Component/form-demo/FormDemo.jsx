import { useState } from "react";


export function FormDemo(){

    const [userDetails, setUserDetails] = useState({"UserName":"", "Age":0, "City":"", "Mobile":""});


    function handleNameChange(e){
        setUserDetails({
            UserName: e.target.value,
            Age: userDetails.Age,
            City: userDetails.City,
            Mobile: userDetails.Mobile
        })
    }

    function handleAgeChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: e.target.value,
            City: userDetails.City,
            Mobile: userDetails.Mobile
        })
    }

    function handleCityChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            City: e.target.value,
            Mobile: userDetails.Mobile
        })
    }
    function handleMobileChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            City: userDetails.City,
            Mobile: e.target.value
        })
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
                <dt>Age</dt>
                <dd><input type="number" name="Age" onChange={handleAgeChange}/></dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={handleCityChange}>
                        <option>Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd>
                    <input type="text" name="Mobile" onChange={handleMobileChange}/>
                </dd>
            </dl>
            <button>Register</button>
            </form>
        </div>
    )
}