import React from "react";
import { Carousel } from "antd";
import styles from  "./newsFeed.module.scss";

function NewsFeedComp() {
  return (
    <div className={styles.newsfeedContainer}>
      <div className={styles.newsfeedContainerTop}>
        <h1>NEWS FEEDS</h1>
        <div className={styles.newsfeedContainerCarouselOver}>
          <Carousel autoplay>
            <div className={styles.newsfeedContainerCarousel}>
              <div className={styles.newsfeedContainerCarouselContent}>
                <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  duis elementum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec duis elementum ... ...
                </p>
                <button>READ MORE</button>
              </div>
            </div>

            <div className={styles.newsfeedContainerCarousel}>
              <div className={styles.newsfeedContainerCarouselContent}>
                <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  duis elementum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec duis elementum ... ...
                </p>
                <button>READ MORE</button>
              </div>
            </div>

            <div className={styles.newsfeedContainerCarousel}>
              <div className={styles.newsfeedContainerCarouselContent}>
                <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  duis elementum Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Donec duis elementum ... ...
                </p>
                <button>READ MORE</button>
              </div>
            </div>
           
          </Carousel>
        </div>
      </div>
      <div className={styles.newsFeedItemsContainer}>
        <div>
          <div className={styles.newsFeedItemsContainerFirstItem}>
            <h2>Family Stories</h2>
          </div>
          <div className={styles.newsFeedItemsContainerSplitSection}>
            <div className={styles.newsFeedItemsContainerSplitSection1st}>
            
              <div className={styles.imageCoverPart} >
              <img src="images/newsfeed/feed_one.png" alt="" />
              </div>
              
              <div className={styles.newsFeedItemsImageCategory}>
                <div>
                <h3>FAMILY</h3>
                </div>
              </div>
              <div className={styles.newsFeedItemsImageDesc}>
                <p>ADOLENSCE AND SEXUAL INSECURITY</p>
              </div>
            </div>
            <div className={styles.newsFeedItemsPart2}>
              <div className={styles.newsFeedItemsPart2Cover}>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/down-boy.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/married.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeedItemsLastPortion}>
          <button className={styles.readMoreYellow}>SEE ALL</button>
        </div>
      </div>


      <div className={styles.newsFeedItemsContainer}>
        <div>
          <div className={styles.newsFeedItemsContainerFirstItem}>
            <h2>Family Stories</h2>
          </div>
          <div className={styles.newsFeedItemsContainerSplitSection}>
            <div className={styles.newsFeedItemsContainerSplitSection1st}>
            
              <div className={styles.imageCoverPart} >
              <img src="images/newsfeed/feed_one.png" alt="" />
              </div>
              
              <div className={styles.newsFeedItemsImageCategory}>
                <div>
                <h3>FAMILY</h3>
                </div>
              </div>
              <div className={styles.newsFeedItemsImageDesc}>
                <p>ADOLENSCE AND SEXUAL INSECURITY</p>
              </div>
            </div>
            <div className={styles.newsFeedItemsPart2}>
              <div className={styles.newsFeedItemsPart2Cover}>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/down-boy.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/married.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeedItemsLastPortion}>
          <button className={styles.readMoreYellow}>SEE ALL</button>
        </div>
      </div>

      <div className={styles.newsFeedItemsContainer}>
        <div>
          <div className={styles.newsFeedItemsContainerFirstItem}>
            <h2>Family Stories</h2>
          </div>
          <div className={styles.newsFeedItemsContainerSplitSection}>
            <div className={styles.newsFeedItemsContainerSplitSection1st}>
            
              <div className={styles.imageCoverPart} >
              <img src="images/newsfeed/feed_one.png" alt="" />
              </div>
              
              <div className={styles.newsFeedItemsImageCategory}>
                <div>
                <h3>FAMILY</h3>
                </div>
              </div>
              <div className={styles.newsFeedItemsImageDesc}>
                <p>ADOLENSCE AND SEXUAL INSECURITY</p>
              </div>
            </div>
            <div className={styles.newsFeedItemsPart2}>
              <div className={styles.newsFeedItemsPart2Cover}>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/down-boy.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/married.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeedItemsLastPortion}>
          <button className={styles.readMoreYellow}>SEE ALL</button>
        </div>
      </div>

      <div className={styles.newsFeedItemsContainer}>
        <div>
          <div className={styles.newsFeedItemsContainerFirstItem}>
            <h2>Family Stories</h2>
          </div>
          <div className={styles.newsFeedItemsContainerSplitSection}>
            <div className={styles.newsFeedItemsContainerSplitSection1st}>
            
              <div className={styles.imageCoverPart} >
              <img src="images/newsfeed/feed_one.png" alt="" />
              </div>
              
              <div className={styles.newsFeedItemsImageCategory}>
                <div>
                <h3>FAMILY</h3>
                </div>
              </div>
              <div className={styles.newsFeedItemsImageDesc}>
                <p>ADOLENSCE AND SEXUAL INSECURITY</p>
              </div>
            </div>
            <div className={styles.newsFeedItemsPart2}>
              <div className={styles.newsFeedItemsPart2Cover}>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/down-boy.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/married.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeedItemsLastPortion}>
          <button className={styles.readMoreYellow}>SEE ALL</button>
        </div>
      </div>

      <div className={styles.newsFeedItemsContainer}>
        <div>
          <div className={styles.newsFeedItemsContainerFirstItem}>
            <h2>Family Stories</h2>
          </div>
          <div className={styles.newsFeedItemsContainerSplitSection}>
            <div className={styles.newsFeedItemsContainerSplitSection1st}>
            
              <div className={styles.imageCoverPart} >
              <img src="images/newsfeed/feed_one.png" alt="" />
              </div>
              
              <div className={styles.newsFeedItemsImageCategory}>
                <div>
                <h3>FAMILY</h3>
                </div>
              </div>
              <div className={styles.newsFeedItemsImageDesc}>
                <p>ADOLENSCE AND SEXUAL INSECURITY</p>
              </div>
            </div>
            <div className={styles.newsFeedItemsPart2}>
              <div className={styles.newsFeedItemsPart2Cover}>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/down-boy.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/married.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeedItemsLastPortion}>
          <button className={styles.readMoreYellow}>SEE ALL</button>
        </div>
      </div>


      <div className={styles.newsFeedItemsContainer}>
        <div>
          <div className={styles.newsFeedItemsContainerFirstItem}>
            <h2>Family Stories</h2>
          </div>
          <div className={styles.newsFeedItemsContainerSplitSection}>
            <div className={styles.newsFeedItemsContainerSplitSection1st}>
            
              <div className={styles.imageCoverPart} >
              <img src="images/newsfeed/feed_one.png" alt="" />
              </div>
              
              <div className={styles.newsFeedItemsImageCategory}>
                <div>
                <h3>FAMILY</h3>
                </div>
              </div>
              <div className={styles.newsFeedItemsImageDesc}>
                <p>ADOLENSCE AND SEXUAL INSECURITY</p>
              </div>
            </div>
            <div className={styles.newsFeedItemsPart2}>
              <div className={styles.newsFeedItemsPart2Cover}>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/down-boy.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
              <div className={styles.newsFeedItemsPart2Container}>
                <div  className={styles.newsFeedItemsPart2ImagePart}  style={{}}>
                
                  <img src="images/newsfeed/married.png" alt="" />
                  <div className={styles.newsFeedItemsPart2ImageCategory}>
                    <h4>Family</h4>
                  </div>
                </div>
                <div className={styles.newsFeedItemsPart2Desc}>
                  <h2>
                    ADOLENSCE AND SEXUAL <br />
                    INSECURITY
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum...
                  </p>
                  
                  <button className={styles.newsFeedItemsPart2DescButton}>
                    READ MORE
                  </button>
                </div>
              </div>
            
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeedItemsLastPortion}>
          <button className={styles.readMoreYellow}>SEE ALL</button>
        </div>
      </div>


      

     
         
      
    </div>
  );
}

export default NewsFeedComp;
