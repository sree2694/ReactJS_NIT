/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";


export function ButtonDemo()
{
    const [msg, setMsg] = useState('');

    function OpenWindow(){
        window.open("../images/m1.jpg","Mobile","width=400 height=400");
    }
    function handleCut(){
        setMsg('Removed - Copied to clipboard');
    }
    function handleCopy(){
        setMsg('Copied to Clipboard');
    }
    function handlePaste(){
        setMsg('Inserted from Clipboard');
    }
    return(
        <div className="container-fluid">
            <h2>Double Click</h2>
            <img onDoubleClick={OpenWindow} src="../images/m1.jpg"  width="100" height="100"/>
             <br /> <br/>
            <textarea rows="4" cols="40" onCut={handleCut} onCopy={handleCopy} onPaste={handlePaste}>

            </textarea>
            <p>{msg}</p>
        </div>
    )
}