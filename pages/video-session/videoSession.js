import React from 'react'
import './videoSession.scss'




function VideoSession() {
  return (
    <div>
      <div className="video-cover" >
        <img src="images/video-session/video-avatar.png" alt=''/>
      </div>
      <div className="video-cover-second">
      <img src="images/video-session/video-girl-avatar.png" alt="" />
      <div className="video-cover-second-expand">
        <img src="images/video-session/expand.svg" alt=""/>
      </div>
      </div>
      <div className="video-cover-utils" >
        <div className="video-cover-utils-mic">
        <img src="images/video-session/mic-cancel.svg" alt=""/>
        </div>
        <div className="video-cover-utils-phone">
        <img src="images/video-session/phone.svg" alt=""/>
        </div>
        <div className="video-cover-utils-video">
        <img src="images/video-session/video-cancel.svg" alt=""/>
        </div>
      </div>
    </div>
  )
}
 
export default VideoSession