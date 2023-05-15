import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";

export function VideoEdit(){
    const [videos, setVideos] = useState([{id:0, title:'', url:'', views:0, likes:0, subscribed:false}]);
    const params = useParams();
    const formik = useFormik({
        initialValues: {
            id: videos[0].id,
            title: videos[0].title,
            url:videos[0].url,
            likes: videos[0].likes,
            views: videos[0].views,
            subscribed: videos[0].subscribed
        },
        onSubmit : (values) => {
          
        }
    });
    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://127.0.0.1:5566/videos/${params.id}`
        }).then(response=>{
            setVideos(response.data);
        })
    },[]);

    return(
       <div>
         <h2>Edit Video Details</h2>
         <form>
         <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" name="id" value={videos[0].id} onChange={formik.handleChange} /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" name="title" value={videos[0].title} onChange={formik.handleChange} /></dd>
                    <dt>URL</dt>
                    <dd><input type="text" name="url" value={videos[0].url} onChange={formik.handleChange} /></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" name="likes" value={videos[0].likes} onChange={formik.handleChange}  /></dd>
                    <dt>Views</dt>
                    <dd><input type="number" name="views" value={videos[0].views} onChange={formik.handleChange}  /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input className="form-check-input" type="checkbox" checked={videos[0].subscribed} name="subscribed" onChange={formik.handleChange} />
                    </dd>
                </dl>
                <button className="btn btn-success me-2 ">Save</button>
                <Link to="/manage" className="btn btn-warning">Cancel</Link>
         </form>
       </div>
    )
}