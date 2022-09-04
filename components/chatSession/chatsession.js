import React from 'react'
import { PaperClipOutlined, AudioFilled } from '@ant-design/icons'
import styles from './chatsession.module.scss'

function ChatsessionComp() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatPart}>
        <div className={styles.chatNavCover}>
          <div className={styles.chatNav} >
          <div className={styles.chatNavAvatar}>
          <div className={styles.chatNavAvatarImg}>
            <img style={{ height: "1.5em", width: "1.5em", borderRadius: "50%", color:"green" }} src="images/chat-session/greendot.png" alt="" /> 
          </div>
          <div className={styles.chatNavAvatarTitle}>
           <div className={styles.chatNavAvatarTitleInner}>
           <h2>ADELAKUN JOHN</h2>
            <span>In Session</span>
           </div>
          </div>   
          </div>
          <div className={styles.chatNavIcons} >
          <img src="images/chat-session/phone.svg"  alt='' />
          <img src="images/chat-session/video.svg" alt='' />
          <img src="images/chat-session/overflow-menu.svg" alt='' />
          </div>
          </div>
        </div>
        <div className={styles.chatNavMessage} >
          <div className={styles.chatNavMessageTop}>
         <h3>02/05/2022</h3>
         <div className={styles.chatNavMessageRight}>
          <div className={styles.chatNavMessageRightCover}>
            <div className={styles.chatNavMessageRightBody}>
            <h2>Good Morning Dr. Adelakun</h2>
            </div>
            <p>9:50am</p>
          </div>
          <div className={styles.chatNavMessageRightCover}>
            <div className={styles.chatNavMessageRightBody}>
            <h2>How are you doing sir ?</h2>
            </div>
            <p>9:50am</p>
          </div>
         </div>
         <div className={styles.chatNavMessageLeft}>
          <div  className={styles.chatNavMessageLeftCover}>
            <div className={styles.chatNavMessageLeftBody}>
              <h2>Good Morning Mr Joshua</h2>
            </div>
            <p>9:50am</p>
          </div>
          <div className={styles.chatNavMessageLeftCover}>
            <div className={styles.chatNavMessageLeftBody}>
              <h2>How are you today ?</h2>
            </div>
            <p>9:50am</p>
          </div>
         </div>
         </div>
        </div>
        <div className={styles.chatNavSendMessage}>
          <div className={styles.chatNavSendMessageMain}>
          <div className={styles.chatNavSendMessageMainUtils} >
            <div style={{ width: "100%", display: "flex", flexDirection: "row"}}>
          <PaperClipOutlined style={{ fontSize: "3rem", color: "#A9A9A9" }} />
            <input type="text" placeholder='Type a message here...' />
            <div>
            <AudioFilled style={{ fontSize: "2.5rem", color: "#A9A9A9" }}  />
            </div>
            </div>
          </div>
          <div className={styles.chatNavSendMessageMainAction}>
          <img src="images/chat-session/send-fill.svg" alt='' />
          </div>
          </div>
        </div>
      </div>
      <div className={styles.chatPersonDetailsCover}>
        <div className={styles.chatPersonDetailsCoverMain}>
        <div className={styles.chatPersonDetailsAvatar}>
          <div>
            <div style={{  position: "relative"}}>
            <img src="images/chat-session/light-greendot.png" alt=""  />
            </div>
            <div style={{marginTop: "-2.2em"}}>
            <img src="images/chat-session/avatar-image.png" alt="" />
            </div>
          </div>
          <div className={styles.chatPersonDetailsAvatarTitle}>
            <h1>ADELAKUN JOHN</h1>
            <p>Addiction Therapist</p>
          </div>

          <div className={styles.chatPersonDetailsAbout}>
          <h2>ABOUT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
        </div>
        </div>
       
        <div className={styles.chatPersonDetailsButtons}>
          <button  className={styles.button1}>Request Video Chat</button>
          <button className={styles.button2}>END SESSION</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ChatsessionComp