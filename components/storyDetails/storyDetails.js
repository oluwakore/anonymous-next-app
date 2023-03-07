import React, { useEffect, useState } from "react";
import { Divider, message } from "antd";
import moment from "moment";
import { Empty } from "antd";
import { Bars } from "react-loader-spinner";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import styles from "./storyDetails.module.scss";
import { getStory, getStoryComments, postComments } from "../../api/base";
import Footer from "../Footer/Footer";
import Comments from "./comments";

function StoryDetailsComp({ storyInfoId, authorID, userToken, authorName }) {
  const [loading, setLoading] = useState(false);
  const [currentStory, setCurrentStory] = useState();
  const [commentBody, setCommentBody] = useState();
  const [content, setContent] = useState("");
  const [showReplyInput, setShowReplyInput] = useState();
  const [reply, setReply] = useState();

  // console.log(authorID)
  // console.log(currentStory)
  //  console.log(content)

  // send comments
  const handleSendComment = async () => {
    try {
      const res = await postComments(
        storyInfoId,
        { content, authorID, storyInfoId },
        userToken
      );
      const { data } = res;

      handleComments(storyInfoId);
      setContent("");
      //  console.log(data)
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendReply = async () => {
    try {
      const res = await postComments(
        storyInfoId,
        { content, authorID, parentId },
        userToken
      );
      const { data } = res;

      handleComments(storyInfoId);
      //  setContent("")
      //  console.log(data)
    } catch (err) {
      console.error(err);
    }
  };

  // get story details
  const handleStoryDetails = async (id) => {
    try {
      setLoading(true);
      const res = await getStory(id);

      const { data } = res;

      setCurrentStory(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      message.error("Something went wrong, try refreshing the page");
    }
  };

  // get comments for story
  const handleComments = async (id) => {
    try {
      // setLoading(true)
      const res = await getStoryComments(id);

      const { data } = res;

      // console.log(data?.data)

      setCommentBody(
        data?.data.filter((comments) => comments.parentID === null)
      );

      // setReply()

      // setCommentBody(data?.data)
      // console.log(commentBody)
      // setCurrentStory(data.data)
      // setLoading(false)
    } catch (err) {
      // setLoading(false)
      message.error("Unable to fetch comments");
    }
  };

  const commReplies = (commID) => {
    return commentBody.filter((comments) => comments.parentID === commID);
  };

  // const baseComments = () => {
  //   return commentBody.filter((comments) => comments.parentID === null) }

  // console.log(baseComments)

  useEffect(() => {
    handleStoryDetails(storyInfoId);
    handleComments(storyInfoId);
  }, []);

  // console.log(details?.data)

  // const {preview, body, coverImg} = details

  const getInitials = (nameString) => {
    const fullName = nameString.split(" ");
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    const result = initials.toUpperCase();

    return result;
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
            <Bars height="40" width="40" color="#0e0b8b" />{" "}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.storyDetailsContainer}>
            <div className={styles.storyDetailsTop}>
              <img
                src={`${
                  currentStory?.coverImg === ""
                    ? "../images/no-image.png"
                    : currentStory?.coverImg
                }`}
                alt="image"
              />
              <small> {currentStory?.tags} </small>
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
                      {currentStory?.comments.length === 0 ? (
                        <div
                          style={{
                            height: "70vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ margin: "auto" }}>
                            <Empty
                              description={<span>No Comments yet.</span>}
                            />
                          </div>
                        </div>
                      ) : (
                        commentBody?.map((item) => (
                          <Comments
                            key={item?.id}
                            authorName={authorName}
                            item={item}
                            parentID={item?.id}
                            repliesArray={item?.replies}
                            authorID={authorID}
                            userToken={userToken}
                            storyID={storyInfoId}
                            claps={item?.claps}
                            onSubmitReply={() => handleComments(storyInfoId)}
                          />
                        ))
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.storyCommentBottom}>
                  <div className={styles.storyCommentBottomMain}>
                    <div className={styles.storyCommentBottomInput}>
                      <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        placeholder="Type Your Comment Here"
                      />
                    </div>
                    <SendOutlined
                      // onClick={handleSendReply}
                      onClick={handleSendComment}
                      style={{ fontSize: "3rem", color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default StoryDetailsComp;
