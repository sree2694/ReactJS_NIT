/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

export function ButtonDemo()
{
    const [status, setStatus] = useState(1);
    const [textContainer, setTextContainer] = useState({display:'none'});
    const [imgContainer, setImgContainer] = useState({display:'none'});


    var count = 1;
    function Loading(){
        if(count==100){
            setImgContainer({
                display:'block'
            });
            setTextContainer({
                display: 'none'
            })
        } else {
            count++;
            setStatus(count);
        }
    }

    function handleLoadClick(){
        setTextContainer({
            display: 'block'
        })
        setInterval(Loading, 200);
    }

    useEffect(()=>{
       
    },[]);
   
    return(
        <div className="container-fluid">
           <button className="btn mt-2 btn-primary" onClick={handleLoadClick}>Load Image</button>
           <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                <div className="text-center" style={textContainer}>
                    <div className="spinner-border"></div>
                    <p>{status} %</p>
                    <p>Loading</p>
                </div>
                <div style={imgContainer}>
                    <img src="images/m1.jpg" width="300" height="300"/>
                </div>
           </div>
        </div>
    )
}