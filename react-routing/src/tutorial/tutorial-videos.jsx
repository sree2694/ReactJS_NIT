import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function TutorialVideos()
{
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect(()=>{
        if(cookies.userid==undefined){
            navigate("/login");
        }
    },[]);

    function handleSignout(){
        removeCookie("userid");
        navigate("/login");
    }

    return(
        <div>
            <h3>Videos Home - {cookies.userid}  <span><button onClick={handleSignout} className="btn btn-link">Signout</button></span> </h3>
            <div className="d-flex">
                <div className="me-3">
                    <iframe src="https://www.youtube.com/embed/8ffFPCj6SlU" width="400" height="300"></iframe>

                </div>
                <div>
                <iframe src="https://www.youtube.com/embed/ufy2hHdfOEs" width="400" height="300"></iframe>
                    
                </div>
            </div>
        </div>
    )
}