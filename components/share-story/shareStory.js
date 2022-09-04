import React from 'react'
import styles from './shareStory.module.scss'


function ShareStoryComp() {
  return (
    <div className={styles.shareStoryContainer}>
      <div className={styles.shareStoryTitle}>
        <h1>We Want to Hear your Stories</h1> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
      </div> 
      
        <form className={styles.shareStoryTop}>
        <div className={styles.shareStoryForm}>
        <div className={styles.shareStoryTextarea}>
          <div className={styles.textareaCover}>
          <textarea placeholder='Tell your story...' ></textarea>
          </div>
          <div className={styles.shareStoryMicCover}>
          <div className={styles.shareStoryMic}>
          <img src="images/therapyForm/microphone.svg" alt="" />
          </div>
          </div>
        </div>
        <div style={{ margin: "auto" }}>
        <button className={styles.btnShare} >SHARE YOUR STORY</button>
        </div>
        </div>
        </form>
    
    </div>
  )
}

export default ShareStoryComp