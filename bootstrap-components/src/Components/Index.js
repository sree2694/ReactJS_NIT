import { AlertMessage } from "./alertMessage"
import { Badge } from "./badge"
import { BreadCrumb } from "./breadcrumb"
import { Buttons } from "./buttons"
import { ToolbarAndGroup } from "./toolbarAndGroup"
import "./index.css";
import { Modal } from "./modal"

export function Index(){
    return(
      <div className='container-fluid'>
        <AlertMessage/><hr/>
        <Badge/><hr/>
        <BreadCrumb/><hr/>
        <Buttons/><hr/>
        <ToolbarAndGroup/><hr/>
        <Modal/><hr/>

 </div>
    )
}