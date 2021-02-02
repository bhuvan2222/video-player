import React , { useState , useRef } from 'react';
import './VideoCard.css';

import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Adc from './Adc';


function VideoCard({ url, channel, likes ,shares , song, avatarSrc}) {

const [isVideoPlaying, setIsVideoPlaying] = useState(false);
const videoRef = useRef(null);

const onVideoPress= () => {
if(isVideoPlaying)
{
    videoRef.current.pause();
setIsVideoPlaying(false)
}
else{
    videoRef.current.play();
    setIsVideoPlaying(true) 
}
}


    return (
        <div className="videoCard">
         

           <VideoHeader />
            <video ref={videoRef} onClick={onVideoPress} className="videoCard__player" src={url} alt="vidig" loop/>
          <VideoFooter 
         channel={channel}
          likes={likes}
          shares={shares}
          song={song}
          avatarSrc={avatarSrc}
          />


       
        
        </div>
    )
}

export default VideoCard; 
