import React, { useEffect, useState } from "react";
import Head from "next/head";
import AnonyStoriesComp from "../../components/anonystories/anonyStories";
import DashboardNav from "../../components/dashboard/dashboardNav/dashboardNav";
import Footer from "../../components/Footer/Footer";
import { allStoriesFuncs, allStoriesCategoriesFuncs, allStoriesLen, allStoriesCatLen } from "../../api/base/index";

function Stories() {
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [catLoading, setCatLoading] = useState(false);
  const [storiesSum, setStoriesSum] = useState();
  const [firstStory, setFirstStory] = useState([]);
  const [storiesList, setStoriesList] = useState([]);
  const [cat, setCat] = useState("All")

  // console.log(storiesList);


  const storiesCatLength = async (section) => {
    try {
      setCatLoading(true);
      if(section === "All") {
        const res = await allStoriesLen();
      // console.log(res.data.data[0])
      setStoriesSum(res.data?.data?.length)
      console.log(storiesSum)
      } else {
        const res = await allStoriesCatLen(section);
      // console.log(res.data.data[0])
      setStoriesSum(res.data?.data?.length)
      console.log(storiesSum)
      } 
      
      setCatLoading(false);
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };

  // console.log(storieslength)
  const handleAllStories = async () => {
    try {
      setLoading(true);
      const res = await allStoriesFuncs(pageNo, pageSize);
      // console.log(res.data.data[0])
      setStoriesList(res.data?.data);
      setFirstStory(res.data?.data[0])
      setStoriesSum(res.data?.data?.length)
      console.log(storiesSum)
      setLoading(false);
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };

  const handleStoriesCategories = async (section) => {
    try {
      setCatLoading(true);
      if(section === "All") {
        const res = await allStoriesFuncs(pageNo, pageSize);
      // console.log(res.data.data[0])
      setStoriesList(res.data?.data);
      storiesCatLength(section)
      console.log(storiesList)
      // setStoriesSum(res.data?.data?.length)
      // console.log(storiesSum)
      } else {
        const res = await allStoriesCategoriesFuncs(pageNo, pageSize, section);
      // console.log(res.data.data[0])
      setStoriesList(res.data?.data);
      storiesCatLength(section)
      // setStoriesSum(res.data?.data?.length)
      console.log(storiesList)
      // console.log(storiesSum)
      } 
      
      setCatLoading(false);
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  }

  const handleStoriesCategoriesLength = async (section, currentPage) => {
    try {
    
      if(section === "All") {
        const res = await allStoriesFuncs(currentPage, pageSize, section);
      // console.log(res.data.data[0])
      setStoriesList(res.data?.data);
      
      console.log(storiesList)
      // setStoriesSum(res.data?.data?.length)
      // console.log(storiesSum)
      } else {
        const res = await allStoriesCategoriesFuncs(currentPage, pageSize, section);
      // console.log(res.data.data[0])
      setStoriesList(res.data?.data);
      // setStoriesSum(res.data?.data?.length)
      console.log(storiesList)
      // console.log(storiesSum)
      } 
      
    
    } catch (err) {
     
      console.log(err);
    }
  }

  // useEffect(() => {
  //   // storiesLength()
  //   handleAllStories();
  // }, [pageNo]);


  useEffect(() => {
    // storiesLength()
    handleAllStories();
    handleStoriesCategories("All")
  }, []);


  return (
    <div style={{ overflow: "hidden" }}>
        <Head>
        <title>Anonymous Stories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>

      <DashboardNav />
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
        // getAllStorys={() => handleAllStories()}
      />
      <Footer />
    </div>
  );
}

//  export const getServerSideProps = async() => {
//   const res = await allStories()

//   const { data } = res

//   // console.log(data.result)

//     return {
//       props: {
//         storieslength: data.result
//       }
//     }
//   }

export default Stories;
