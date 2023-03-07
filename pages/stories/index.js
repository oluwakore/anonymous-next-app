import React, { useEffect, useState } from "react";
import Head from "next/head";
import AnonyStoriesComp from "../../components/anonystories/anonyStories";
import DashboardNav from "../../components/dashboard/dashboardNav/dashboardNav";
import Footer from "../../components/Footer/Footer";
import {
  allStoriesFuncs,
  allStoriesCategoriesFuncs,
  allStoriesLen,
  allStoriesCatLen,
} from "../../api/base/index";

function Stories() {
  // sets the current page number
  const [pageNo, setPageNo] = useState(1);
  // sets the current number of stories a page can contain
  const [pageSize, setPageSize] = useState(10);
  // page loading state
  const [loading, setLoading] = useState(false);

  // loading state when a category changes
  const [catLoading, setCatLoading] = useState(false);

  // stores the total number of stories
  const [storiesSum, setStoriesSum] = useState();

  // stores the newest story from the  storieslist
  const [firstStory, setFirstStory] = useState([]);

  // stores the stories from the db in a list
  const [storiesList, setStoriesList] = useState([]);

  // sets the category of the stories currently displayed
  const [cat, setCat] = useState("All");

  // console.log(storiesList);

  // gets the total number of stories for each category and stores it
  const storiesCatLength = async (section) => {
    try {
      setCatLoading(true);
      if (section === "All") {
        const res = await allStoriesLen();
        // console.log(res.data.data[0])
        setStoriesSum(res.data?.data?.length);
        // console.log(storiesSum)
      } else {
        const res = await allStoriesCatLen(section);
        // console.log(res.data.data[0])
        setStoriesSum(res.data?.data?.length);
        // console.log(storiesSum)
      }

      setCatLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // console.log(storieslength)

  // get the list of stories based on page no. and size
  const handleAllStories = async () => {
    try {
      setLoading(true);
      const res = await allStoriesFuncs(pageNo, pageSize);
      // console.log(res.data.data[0])
      setStoriesList(res.data?.data);
      setFirstStory(res.data?.data[0]);
      setStoriesSum(res.data?.data?.length);
      // console.log(storiesSum)
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // gets a new list of stories when catgory changes
  const handleStoriesCategories = async (section) => {
    try {
      setCatLoading(true);
      if (section === "All") {
        const res = await allStoriesFuncs(pageNo, pageSize);
        // console.log(res.data.data[0])
        setStoriesList(res.data?.data);
        storiesCatLength(section);
        // console.log(storiesList)
        // setStoriesSum(res.data?.data?.length)
        // console.log(storiesSum)
      } else {
        const res = await allStoriesCategoriesFuncs(pageNo, pageSize, section);
        // console.log(res.data.data[0])
        setStoriesList(res.data?.data);
        storiesCatLength(section);
        // setStoriesSum(res.data?.data?.length)
        // console.log(storiesList)
        // console.log(storiesSum)
      }

      setCatLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // handle change of category when page number changes
  const handleStoriesCategoriesLength = async (section, currentPage) => {
    try {
      if (section === "All") {
        const res = await allStoriesFuncs(currentPage, pageSize, section);
        // console.log(res.data.data[0])
        setStoriesList(res.data?.data);

        // console.log(storiesList)
      } else {
        const res = await allStoriesCategoriesFuncs(
          currentPage,
          pageSize,
          section
        );
        // console.log(res.data.data[0])
        setStoriesList(res.data?.data);
        // setStoriesSum(res.data?.data?.length)
        // console.log(storiesList)
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleAllStories();
    handleStoriesCategories("All");
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Anonymous Stories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
      {/* dashboard component */}
      <DashboardNav />

      {/* stories component */}
      <AnonyStoriesComp
        firstStory={firstStory}
        storyList={storiesList}
        storiesLength={storiesSum}
        setPageNo={setPageNo}
        setCat={setCat}
        pageSize={pageSize}
        loading={loading}
        catLoading={catLoading}
        getStoryCat={handleStoriesCategories}
        getStoryCatPage={handleStoriesCategoriesLength}
      />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Stories;
