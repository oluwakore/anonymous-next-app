import React, { useState } from "react";
import { Pagination, Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import styles from "./anonyStories.module.scss";
import { storiesData } from "./data";
import Link from "next/link";
import { Bars } from "react-loader-spinner";
import { saveStoryId } from "../../core/actions/storyactions/storyactions";

function AnonyStoriesComp({
  storyList,
  storiesLength,
  setPageNo,
  pageSize,
  loading,
  firstStory,
}) {
  // console.log(storyList);

  //  const firstStory = (list) => {
  //   const story = list[list.length - 1];
  //   return story
  //  }

  //  console.log(firstStory(storyList))

  const dispatch = useDispatch();

  const handleStoryClick = (id) => {
    dispatch(saveStoryId(id));
  };

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storiesHeadliner}>
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "30vh",
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
              <Bars height="60" width="60" color="#0e0b8b" />{" "}
            </div>
          </div>
        ) : (
          <div className={styles.storiesHeadlinerContent}>
            <div className={styles.storiesHeadlinerContentImages}>
              <img src={firstStory?.coverImg} alt={firstStory?.title} />
            </div>
            <div className={styles.storiesNotes}>
              <h1>{firstStory?.title}</h1>
              <p>
                {firstStory?.content?.split(" ").slice(0, 50).join(" ")}...
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel...{" "} */}
              </p>
              <Link
                href={`/stories/${firstStory?.title?.split(" ").join("-")}`}
              >
                <button
                  type="text"
                  onClick={() => handleStoryClick(firstStory?._id)}
                >
                  READ MORE
                </button>
              </Link>
              {/* <button>READ MORE</button> */}
            </div>
          </div>
        )}
      </div>
      <div className={styles.storiesMain}>
        <div className={styles.storiesMainTitle}>
          <h1>ANONYMOUS STORIES</h1>
        </div>
        <div className={styles.storiesMainButtonGroup}>
          <button className={styles.active}>Top</button>
          <button className="">Trending</button>
          <button className="">Recommended</button>
        </div>
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "30vh",
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
              <Bars height="60" width="60" color="#0e0b8b" />{" "}
            </div>
          </div>
        ) : storyList.length === 0 ? (
          <div
            style={{
              width: "100%",
              height: "30vh",
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
              <Empty description={<span>No Stories yet.</span>} />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.storiesGrid}>
              {storyList?.map((item, index) => (
                <div key={index} className={styles.storiesGridMain}>
                  <img
                    src={`${
                      item?.coverImg === ""
                        ? "./images/no-image.png"
                        : item?.coverImg
                    }`}
                    alt=""
                  />
                  <div className={styles.storiesGridMainDesc}>
                    <h2>{item?.title}</h2>
                    <p>
                      {item?.content?.split(" ").slice(0, 10).join(" ")}....
                      <Link
                        href={`/stories/${item?.title?.split(" ").join("-")}`}
                      >
                        <span onClick={() => handleStoryClick(item._id)}>
                          Continue Reading
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              defaultCurrent={1}
              defaultPageSize={pageSize}
              total={storiesLength}
              onChange={(page) => setPageNo(page)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AnonyStoriesComp;
