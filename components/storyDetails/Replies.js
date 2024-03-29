import React, { useState } from "react";
import moment from "moment";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  SendOutlined,
  CloseOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Divider, message } from "antd";
import styles from "./storyDetails.module.scss";

import { likeComments, postComments, unlikeComments } from "../../api/base";

function Replies({
  item,
  authorName,
  storyID,
  userToken,
  authorID,
  parentID,
  onSubmitReply,
  repliesArray,
  claps,
}) {
  const [content, setContent] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReplyList, setShowReplyList] = useState(false);
  const [likes, setLikes] = useState(false);
  // console.log(content);

  // console.log(repliesArray);

  // handle add likes
  const handleLikes = async () => {
    try {
      const res = await likeComments(parentID, { authorID }, userToken);

      // console.log(res.data);
      setLikes(true);
      onSubmitReply();
    } catch (err) {
      console.error(err);
    }
  };

  // handle remove likes
  const handleUnlikes = async () => {
    // console.log('I was clicked!')
    try {
      const res = await unlikeComments(parentID, { authorID }, userToken);

      // console.log(res.data);
      setLikes(false);
      onSubmitReply();
    } catch (err) {
      console.error(err);
    }
  };

  // add send replies
  const handleSendReply = async (e) => {
    e.preventDefault();
    try {
      //  setLoading(true)
      const res = await postComments(
        storyID,
        { content, authorID, parentID },
        userToken
      );
      const { data } = res;

      //  handleGetReplies(storyID)
      //  handleComments()
      setContent("");
      setShowReplyInput(false);
      // console.log(data);

      onSubmitReply();
      //  setLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  // extract initials from name
  const getInitials = (nameString) => {
    const fullName = nameString.split(" ");
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    const result = initials.toUpperCase();

    return result;
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <div /*key={item.id} */ className={styles.commentContainer}>
        <div className={styles.contentUmbrella}>
          <div className={styles.commentContainerTopPart}>
            <div className={styles.commentContainerTopAvatar}>
              <div className={styles.avatarContainer}>
                <h2> {getInitials(item.authorID.name)} </h2>
                {/* <img src="/images/anony-stories/comments.png" alt="" />  */}
              </div>
              <div>
                <h1>
                  {" "}
                  {item?.authorID?.name === authorName
                    ? "ME"
                    : item?.authorID?.name}{" "}
                  <span>
                    {" "}
                    {moment(item?.commentedAt).startOf("hour").fromNow()}{" "}
                  </span>
                </h1>
              </div>
            </div>
            <div>
              <img src="/images/anony-stories/menu-horizontal.svg" alt="" />
            </div>
          </div>
          <div className={styles.commentContainerComments}>
            <p> {item?.content} </p>
          </div>
          <div className={styles.commentActions}>
            {/* <LikeOutlined/> */}
            <div style={{ display: "flex" }}>
              {/* <LikeFilled onClick={handleUnlikes} /> */}
              {!likes ? (
                <LikeOutlined onClick={handleLikes} />
              ) : (
                <LikeFilled onClick={handleUnlikes} />
              )}
              <span style={{ marginLeft: "-.5rem" }}>
                {" "}
                {claps?.length === 0 ? "" : claps?.length}{" "}
              </span>
            </div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowReplyInput(true)}
            >
              Reply
            </span>
            <div>
              {repliesArray?.length === 0 ? (
                ""
              ) : (
                <h4
                  className={styles.repliesListCover}
                  onClick={() => setShowReplyList((prev) => !prev)}
                >
                  {" "}
                  Replies {`(${repliesArray?.length})`}{" "}
                  {showReplyList ? <UpOutlined /> : <DownOutlined />}{" "}
                </h4>
              )}
            </div>
          </div>
        </div>
        {showReplyInput && (
          <div key={item?.id} className={styles.replyPart}>
            <form className={styles.replyPartForm} onSubmit={handleSendReply}>
              <div className={styles.replyClose}>
                <CloseOutlined
                  onClick={() => setShowReplyInput(false)}
                  style={{ fontSize: "1.2rem" }}
                />
              </div>
              <div className={styles.replyPartCover}>
                <div className={styles.replyPart1}>
                  {/* <label>Reply:</label>  */}
                  <input
                    type="text"
                    placeholder="Enter your reply..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <button type="submit">Reply</button>
              </div>
            </form>
          </div>
        )}
        {showReplyList &&
          repliesArray.map((rep) => (
            <Replies
              item={rep}
              authorName={authorName}
              storyID={storyID}
              key={rep.id}
              parentID={rep.id}
              authorID={authorID}
              userToken={userToken}
              onSubmitReply={onSubmitReply}
              repliesArray={rep.replies}
            />
          ))}
        <div style={{ width: "100%" }}>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default Replies;
