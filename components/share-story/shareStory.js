import React, { useState } from 'react'
import { Modal, message } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { shareStory } from '../../api/base'

import styles from './shareStory.module.scss'



function ShareStoryComp() {

  const [preview, setPreview] = useState("")
  const [coverImg, setCoverImg] = useState("") 
  const [body, setBody] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // console.log(storyTitle)
  // console.log(storyImageUrl)
  // console.log(storyBody)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const  { userInfo } = userLogin 

  const loggedUserId = userInfo?.user?.id

  const loggedUserToken = userInfo?.token

  const shareStoryHandler = async(e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const res = await shareStory(loggedUserId, {preview, body, coverImg}, loggedUserToken)
      console.log(res.data)
      setLoading(false)
      setBody("")
      setPreview("")
      setCoverImg("")
      setIsModalOpen(false);
      if(res.data.status === "success") {
      message.success("Story saved successfully, view your stories in your Info tab")
      }
    } catch (err) {
      setLoading(false)
      message.error(err?.message)
      console.log(err)
    }

  }


  return (
    <div className={styles.shareStoryContainer}>
      <div className={styles.shareStoryTitle}>
        <h1>We Want to Hear your Stories</h1> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
      </div> 
      
        <form className={styles.shareStoryTop}  onSubmit={shareStoryHandler}>
        <div className={styles.shareStoryForm}>
          <div className={styles.shareStoryInputCover} >
            <label>Title of Story:</label>
            <input className={styles.shareStoryInput} type="text" 
            value={preview}
            required
            onChange={(e) => setPreview(e.target.value)}
            placeholder="Give your story a title" />
          </div>
          <div className={styles.shareStoryInputCover}>
            <label>Cover Image:</label>
            <input className={styles.shareStoryInput}
            value={coverImg}
            onChange={(e) => setCoverImg(e.target.value)}
            type="text" placeholder="Enter a image URL" />
          </div>
        <div className={styles.shareStoryTextarea}>
          <div className={styles.textareaCover}>
          <textarea placeholder='Tell your story...'
          value={body}  onChange={(e) => setBody(e.target.value)}
          ></textarea>
          </div>
          <div className={styles.shareStoryMicCover}>
          <div className={styles.shareStoryMic}>
          <img src="images/therapyForm/microphone.svg" alt="" />
          </div>
          </div>
        </div>
        <div onClick={showModal} className={styles.button1} > <span> SAVE &#38; PREVIEW </span> </div>
        <Modal 

        visible={isModalOpen}
        footer={null}
         open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h1>Your Story Preview</h1>
            <img src={`${coverImg === "" ?  "./images/no-image.png" : coverImg }`}  alt="story image" /> 
            <div className={styles.prevTitle}>
            <h3>
            {preview}  
            </h3>
            </div> 
            <p>{body}</p> 
            <button onClick={shareStoryHandler} type="submit" className={styles.button2} >{ loading ? "Sharing Your Story..." : "Share Your Story"}</button>         
          </div>
         </div>
        </Modal>
        </div>
        </form>
    </div>
  )
}

export default ShareStoryComp