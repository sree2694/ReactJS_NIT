import { TextField } from "@mui/material";
import { useState } from "react";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export function MUIDemo(){
    const [userName, setUserName] = useState('');
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Bootstrap Input</h2>
            <div className="w-25">
                <label className="form-label">User Name</label>
                <div>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <h2>Material Input</h2>
            <TextField variant="standard" onChange={handleNameChange} label="User Name">

            </TextField>
            <p>
                Hello ! {userName}
            </p>
            <h2>Date</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
        </div>
    )
}