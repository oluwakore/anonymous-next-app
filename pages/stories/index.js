import React, { useEffect, useState } from "react";
import Head from "next/head";
import AnonyStoriesComp from "../../components/anonystories/anonyStories";
import DashboardNav from "../../components/dashboard/dashboardNav/dashboardNav";
import Footer from "../../components/Footer/Footer";
import { allStories, allStoriesFuncs } from "../../api/base/index";

function Stories() {
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [storiesSum, setStoriesSum] = useState();
  const [firstStory, setFirstStory] = useState([]);
  const [storiesList, setStoriesList] = useState([]);

  // console.log(storiesList);

  const storiesLength = async () => {
    try {
      const res = await allStories();

      const { data } = res;

      // setStoriesSum(data?.result);
      // console.log(storiesSum)
    } catch (err) {
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

  useEffect(() => {
    // storiesLength()
    handleAllStories();
  }, [pageNo]);

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
        pageSize={pageSize}
        loading={loading}
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
