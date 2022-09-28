import React, { useEffect, useState } from 'react'
import {Divider, message} from 'antd'
import moment from 'moment'
import { Empty } from "antd";
import { Bars } from "react-loader-spinner";
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons'
import  styles from './storyDetails.module.scss'
import { getStory, getStoryComments, postComments } from '../../api/base'
import Footer from '../Footer/Footer'
import Comments from './comments'


function StoryDetailsComp({storyInfoId, authorID, userToken, authorName}) {

  const [loading, setLoading] = useState(false)
  const [currentStory, setCurrentStory] = useState()
  const [commentBody, setCommentBody] = useState()
  const [content, setContent] = useState("")
  const [showReplyInput, setShowReplyInput] = useState()
  const [reply, setReply] = useState()

  // console.log(authorID)
  // console.log(currentStory)
  //  console.log(content)
  const handleSendComment = async() => {
    try {
      const res = await postComments(storyInfoId, {content, authorID, storyInfoId}, userToken)
       const {data} = res

       handleComments(storyInfoId)
       setContent("")
      //  console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

 
//   const contentx = "test reply"
//   const authorIDx = "6316bfb2709a993620aafdbf"
//   // const storyInfoIdx = "63306e06592c80f16d88116d"

//  const  parentIdx = "6330e6875d33a084964a719c"

  const handleSendReply = async() => {
    
    try {
      const res = await postComments(storyInfoId, {content, authorID, parentId }, userToken)
       const {data} = res

       handleComments(storyInfoId)
      //  setContent("")
      //  console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleStoryDetails = async(id) => {
    try {
        setLoading(true)
        const res = await getStory(id)

        const {data} = res

        
        setCurrentStory(data.data)
        setLoading(false)

    } catch (err) {
      setLoading(false)
      message.error('Something went wrong, try refreshing the page')
    }
  }

  const handleComments = async(id) => {
    try {
        // setLoading(true)
        const res = await getStoryComments(id)

        const {data} = res

        // console.log(data?.data)

      setCommentBody(data?.data.filter((comments) => comments.parentID === null))

      // setReply()

        // setCommentBody(data?.data)
        // console.log(commentBody)
        // setCurrentStory(data.data)
        // setLoading(false)

    } catch (err) {
      // setLoading(false)
      message.error('Unable to fetch comments')
    }
  }


  const commReplies = (commID) => {
    return commentBody.filter((comments) => comments.parentID === commID)
  }

  // const baseComments = () => { 
  //   return commentBody.filter((comments) => comments.parentID === null) }
  

  // console.log(baseComments)

  useEffect(() => {
    handleStoryDetails(storyInfoId)
    handleComments(storyInfoId)
  },[])

  // console.log(details?.data)

  // const {preview, body, coverImg} = details


  const getInitials = (nameString) => {
  
    const fullName = nameString.split(" ")
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    const result = initials.toUpperCase();

    return result
    
  }


 
  return (
    <>
    { loading ?   <div   style={{
           width: "100%",
           height: "100vh",
           display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
          }}>
           <div
           style={{
             margin: "auto",
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           {" "}
           <Bars height="60" width="60" color="#0e0b8b" />{" "}
         </div>
         </div> : (
    <>
    <div className={styles.storyDetailsContainer}>
      <div className={styles.storyDetailsTop} >
        <img src={`${currentStory?.coverImg === "" ? "../images/no-image.png" : currentStory?.coverImg}`} alt="image" />
        {/* <div className={styles.storyDetailsSection}>
          <h2>SEX</h2>
        </div>  */}
      </div>
      <div className={styles.storyDetailsBottom}>
        <div className={styles.storyDetailsMain}>
          <h1>{currentStory?.title}</h1>
          <p>{currentStory?.content}</p>
        </div>
        <div className={styles.storyCommentSection}>
          <div className={styles.storyCommentMain}>
            <h1>COMMENTS</h1>
            <div className={styles.storyCommentMainCover}>
            <div className={styles.storyCommentCover}>
              {
                currentStory?.comments.length === 0 ? (
                  <div style={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{  margin: "auto"}}>
                     <Empty
                      description={
                        <span>No Comments yet.</span>
                      }/>
                  </div>
                 </div>) : (
                  commentBody?.map((item) => (
                    <Comments  
                    key={item?.id}  
                    authorName={authorName} item={item}  
                    parentID={item?.id}
                    repliesArray={item?.replies}
                    authorID={authorID}
                    userToken={userToken}
                    storyID={storyInfoId}
                    claps={item?.claps}
                    onSubmitReply={() => handleComments(storyInfoId)}
                    />
                  ))
                 
                  
                  // commentBody?.map((item, index) => (
                  //   <div key={item.id} className={styles.commentContainer} >
                  //   <div className={styles.contentUmbrella}>
                  // <div className={styles.commentContainerTopPart} >
                  //   <div className={styles.commentContainerTopAvatar} >
                  //   <div className={styles.avatarContainer}>
                  //     <h2> {getInitials(item.authorID.name)} </h2>
                  //      {/* <img src="/images/anony-stories/comments.png" alt="" />  */}
                  //      </div>
                  //      <div>
                  //       <h1> {  item.authorID.name === authorName ? 'ME' : item.authorID.name }  <span> { moment(item.commentedAt).startOf('hour').fromNow()} </span></h1>
                       
                  //      </div>
                  //   </div>
                  //   <div>
                  //     <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
                  //   </div>
                  // </div>
                  // <div className={styles.commentContainerComments}>
                  //   <p> {item.content} </p>
                  // </div>
                  // <div className={styles.commentActions} >
                  //   <LikeOutlined/>
                  //   <span onClick={() => { switchTabs(item.id)}}>Reply</span>
                  // </div>
                  // </div>
                  // {
                  //     showReplyInput && (
                  //       <div key={item.id} className={styles.replyPart}>
                  //         This is Reply input for {item.title}
                  //       </div> 
                  //     )
                  //   }
                  // <div style={{ width: "100%" }}>
                  // <Divider />
                  // </div>
                  // </div>
                  // ))
                )
             }  
            </div>
            </div>
          </div>
          <div className={styles.storyCommentBottom} >
            <div className={styles.storyCommentBottomMain}>
              <div className={styles.storyCommentBottomInput}>
              <input value={content} 
              onChange={(e) => setContent(e.target.value)}
              type="text" placeholder='Type Your Comment Here' />
              </div>
            <SendOutlined
            // onClick={handleSendReply}
            onClick={handleSendComment}
            style={{fontSize: "3rem", color: "white"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    )}

    </>
  )
}

export default StoryDetailsComp




/*Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus

Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus

Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus */