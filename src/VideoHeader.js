import React from 'react';
import './VideoHeader.css';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import { IconButton } from '@material-ui/core';
import {  Link } from 'react-router-dom';






function VideoHeader() {
    return (
        <div className="videoHeader">
        




          <ArrowBackIosIcon fontSize="large"/>
              
        
         <h3>Reels</h3>





<IconButton className="but">
         <CameraAltOutlinedIcon style={{ color: "white" }} />
        </IconButton>
















        </div>
    );
}

export default VideoHeader;
