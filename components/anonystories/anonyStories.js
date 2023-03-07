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
  getStoryCat,
  catLoading,
  getStoryCatPage,
}) {
  const [cate, setCate] = useState("All");
  // console.log(cate)

  // stories categories list
  const [addTypes, setAddTypes] = useState([
    {
      title: "All",
      active: true,
    },
    {
      title: "Relationship",
      active: false,
    },
    {
      title: "Family",
      active: false,
    },
    {
      title: "Financial",
      active: false,
    },
    {
      title: "Education",
      active: false,
    },
    {
      title: "Sexuality",
      active: false,
    },
    {
      title: "Personality",
      active: false,
    },
    {
      title: "Others",
      active: false,
    },
  ]);

  // marks a selected category as active
  const switchTabs = (valueIndex) => {
    const newTabs = [...addTypes];
    newTabs.forEach((item, index) => {
      item.active = false;
      if (valueIndex === index) {
        item.active = true;
        getStoryCat(item.title);
        setCate(item.title);
      }
    });
    setAddTypes(newTabs);
  };

  const dispatch = useDispatch();

  // saves a story id when story is clicked
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
              <Bars height="40" width="40" color="#0e0b8b" />{" "}
            </div>
          </div>
        ) : (
          <div className={styles.storiesHeadlinerContent}>
            <div className={styles.storiesHeadlinerContentImages}>
              <img src={firstStory?.coverImg} alt={firstStory?.title} />
              <small> {firstStory.tags} </small>
            </div>
            <div className={styles.storiesNotes}>
              <h1>{firstStory?.title}</h1>
              <p>{firstStory?.content?.split(" ").slice(0, 50).join(" ")}...</p>
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
        {catLoading ? (
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
              <Bars height="40" width="40" color="#0e0b8b" />{" "}
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
                  <div className={styles.storiesGridMainImages}>
                    <img
                      src={`${
                        item?.coverImg === ""
                          ? "./images/no-image.png"
                          : item?.coverImg
                      }`}
                      alt=""
                    />
                    <small>{item.tags[0]}</small>
                  </div>
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
              onChange={(page) => {
                // getStoryCatPage(cate, page)
                // setPageNo(page)
                // console.log(page)
                getStoryCatPage(cate, page);
                // getStoryCat(cate)
              }}
            />
          </>
        )}
      </div>
      <div>
        <div className={styles.tagsCover}>
          <h1>TAGS</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {addTypes.map((item, index) => (
              <h1
                className={[
                  styles.tags,
                  item.active ? styles.tagsActive : "",
                ].join(" ")}
                key={index}
                onClick={() => {
                  switchTabs(index);
                  // setCat(item.title)
                  // getStoryCat()
                  // console.log(item.title)
                }}
              >
                <span> {item.title} </span>
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnonyStoriesComp;
