import React from 'react'
import "../css/header.css"
import pfp from "../pfp.png"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function Header(props) {
    return (
        <div className="header">
            <div className="header__logo">
                <div>
            <img src={pfp} alt=""></img>
            </div>
            <div>
            <span><b>Classroom<br></br><span></span>Manager</b></span>
            </div>
            </div>
            <div className='floatRight'>
            <div className="header__icons">  
                <span>
                    <Avatar src={props.photoURL}/>
                </span>
                <span id="name"><b>Kishore</b></span>
                <span id="SettingsIcon">
                    <NotificationsNoneIcon/>
                </span>
                <span>
                    <HelpOutlineIcon/>
                </span>
            </div>
            </div>

        </div>
    )
}

export default Header
