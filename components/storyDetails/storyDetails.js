import React from 'react'
import {Divider} from 'antd'
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons'
import  styles from './storyDetails.module.scss'


function StoryDetailsComp() {
  return (
    <div className={styles.storyDetailsContainer}>
      <div className={styles.storyDetailsTop} >
        <img src="/images/anony-stories/details.png" alt="" />
        <div className={styles.storyDetailsSection}>
          <h2>SEX</h2>
        </div> 
      </div>
      <div className={styles.storyDetailsBottom}>
        <div className={styles.storyDetailsMain}>
          <h1>ADOLENSCE AND SEXUAL INSECURITY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus

Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus

Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
        </div>
        <div className={styles.storyCommentSection}>
          <div className={styles.storyCommentMain}>
            <h1>COMMENTS</h1>
            <div className={styles.storyCommentMainCover}>
            <div className={styles.storyCommentCover}>
            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>

            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>

            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>

            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>

            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>

            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>

            <div className={styles.commentContainer} >
              <div className={styles.contentUmbrella}>
            <div className={styles.commentContainerTopPart} >
              <div className={styles.commentContainerTopAvatar} >
              <div>
                 <img src="/images/anony-stories/comments.png" alt="" /> 
                 </div>
                 <div>
                  <h1>Alao John</h1>
                 </div>
              </div>
              <div>
                <img  src="/images/anony-stories/menu-horizontal.svg" alt=""/>
              </div>
            </div>
            <div className={styles.commentContainerComments}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati sLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className={styles.commentActions} >
              <LikeOutlined/>
              <DislikeOutlined />
              <span>Reply</span>
            </div>
            </div>
            <div style={{ width: "100%" }}>
            <Divider />
            </div>
            </div>
         
            </div>
            </div>
          </div>
          <div className={styles.storyCommentBottom} >
            <div className={styles.storyCommentBottomMain}>
              <div className={styles.storyCommentBottomInput}>
              <input type="text" placeholder='Type Your Comment Here' />
              </div>
            <SendOutlined style={{fontSize: "3.5rem", color: "white"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryDetailsComp