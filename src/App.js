import React, { useState , useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';





function App() {
  const [reels, setReels]=useState([]);


  useEffect(() => {

db.collection('reels').onSnapshot(snapshot => (
  setReels(snapshot.docs.map(doc => doc.data()))
))

  },[])
  
  
  
  
  
  
  
  return (
    <div className="app">
 



<div className="app__videos">
    
    {reels.map(({ channel, avatarSrc, likes, shares, song,url}) => (
    
    <VideoCard url={url} channel={channel} likes={likes} shares={shares} song={song} avatarSrc={avatarSrc} />
    ))}
    
       </div>
     




     
  

  



 
  

    </div>
  );
}

export default App;
