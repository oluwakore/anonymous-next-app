import React, { useState } from "react";
import { Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { shareStory } from "../../api/base";

import styles from "./shareStory.module.scss";

// story categories
const topics = [
  {
    id: 1,
    title: "Relationship",
  },
  {
    id: 2,
    title: "Family",
  },
  {
    id: 3,
    title: "Financial",
  },
  {
    id: 4,
    title: "Education",
  },
  {
    id: 5,
    title: "Sexuality",
  },
  {
    id: 6,
    title: "Personality",
  },
  {
    id: 7,
    title: "Others",
  },
];

function ShareStoryComp() {
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(tags)

  // show modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // when ok button in modal is clicked
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // handle cancel modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // console.log(storyTitle)
  // console.log(storyImageUrl)
  // console.log(storyBody)

  const dispatch = useDispatch();

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the author id i.e user id
  const authorID = userInfo?.user?.id;

  // const tags = ['Family', 'Earth']

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // post story to the db
  const shareStoryHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await shareStory(
        loggedUserId,
        { title, content, coverImg, tags, authorID },
        loggedUserToken
      );
      // console.log(res.data)
      setLoading(false);
      setTitle("");
      setContent("");
      setCoverImg("");
      setIsModalOpen(false);
      if (res.data.status === "success") {
        message.success(
          "Story saved successfully, view your stories in your Info tab"
        );
      }
    } catch (err) {
      setLoading(false);
      message.error(err?.message);
      console.error(err);
    }
  };

  return (
    <div className={styles.shareStoryContainer}>
      <div className={styles.shareStoryTitle}>
        <h1>We Want to Hear your Stories</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
      </div>

      <form className={styles.shareStoryForm} onSubmit={shareStoryHandler}>
        <div className={styles.shareStoryInputCover}>
          <label>Title of Story:</label>
          <input
            className={styles.shareStoryInput}
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your story a title"
          />
        </div>
        <div className={styles.shareStoryInputCover}>
          <label>Cover Image:</label>
          <input
            className={styles.shareStoryInput}
            value={coverImg}
            onChange={(e) => setCoverImg(e.target.value)}
            type="text"
            placeholder="Enter a image URL"
          />
        </div>
        <div className={styles.shareStorySelect}>
          <div className={styles.shareStorySelectMain}>
            <label>Tag:</label>
            <select
              required
              defaultValue="none"
              onChange={(e) => {
                setTags(e.target.value);
              }}
            >
              {topics.map((topic, index) => (
                <>
                  <option value="none" disabled>
                    Select a tag
                  </option>
                  <option key={index} value={topic.title}>
                    {topic.title}
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.shareStoryTextarea}>
          <div className={styles.textareaCover}>
            <textarea
              placeholder="Tell your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.shareStoryMicCover}>
            <div className={styles.shareStoryMic}>
              <img src="images/therapyForm/microphone.svg" alt="" />
            </div>
          </div>
        </div>
        <div onClick={showModal} className={styles.button1}>
          {" "}
          <span> SAVE &#38; PREVIEW </span>{" "}
        </div>
        <Modal
          visible={isModalOpen}
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
              <h1>Your Story Preview</h1>
              <img
                src={`${coverImg === "" ? "./images/no-image.png" : coverImg}`}
                alt="story image"
              />
              <div className={styles.prevTitle}>
                <h3>{title}</h3>
              </div>
              <p>{content}</p>
              <small>
                Tags: <span>{tags}</span>
              </small>
              <button
                onClick={shareStoryHandler}
                type="submit"
                className={styles.button2}
              >
                {loading ? "Sharing Your Story..." : "Share Your Story"}
              </button>
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default ShareStoryComp;
