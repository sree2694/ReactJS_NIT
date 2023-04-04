import { useState } from "react";

export function RegUserDemo()
{
    const [userName, setUsername] = useState('john');
    const [tip, setTip] = useState('');

    function ChangeCase(){
        setUsername(userName.toUpperCase());
        setTip('');
    }
    function handleUserChange(e){
        setUsername(e.target.value)
    }
    function ShowTip(){
        setTip('Name in Block Letter Only');
    }
   
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
               <dt>User Name</dt>
               <dd><input type="text" onFocus={ShowTip} onChange={handleUserChange} value={userName} onBlur={ChangeCase} placeholder="Name in block letters" /></dd>
               <dd>{tip}</dd>
            </dl>
        </div>
    )
}
