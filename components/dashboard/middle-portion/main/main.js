import React, { useRef} from 'react'
import { PlayCircleFilled} from '@ant-design/icons'
import  Link from 'next/link'
import styles from './main.module.scss'


function CentralPortion() {
  return (
    <div className={styles.centralContainer}>
      <div className={styles.centralContainerCover}>
      <div className={styles.centralContainerVideoHolder}>
      <img src="images/dashboard/dashboard.png" alt='' />
      <PlayCircleFilled className={styles.videoCta} style={{ fontSize: "6.1rem", color: "#B1AFFF" }}/>
      </div>
      <div className={styles.centralContainerServices}>
        <h1>What Do You Want To Do?</h1>
        <div className={styles.centralContainerServicesMain} >
        <Link style={{ textDecoration: "none" }} href="/therapy-form">
          <div className={styles.centralContainerServicesCard}>
            <img src="images/dashboard/therapy.svg" alt='' style={{ borderRadius: "2.5em", backgroundColor: "#FFDBE1",  height: "15rem", width: "17rem" , padding: "2em" }} />
            <h2> Therapy Session </h2>
          </div>
        </Link>
          <Link style={{ textDecoration: "none" }} href="/share-story">
          <div className={styles.centralContainerServicesCard}>
            <img  src="images/dashboard/share.svg" alt='' style={{ borderRadius: "2.5em", backgroundColor: "#DBFFE3", height: "15rem", width: "17rem" , padding: "2em" }}/>
            <h2> Share Your Story </h2>
          </div>
        </Link>
          <Link style={{ textDecoration: "none" }} href="/stories">
          <div className={styles.centralContainerServicesCard}>
            <img src="images/dashboard/thoughts.svg" alt=''  style={{ borderRadius: "2.5em", backgroundColor: "#DBDCFF" , height: "15rem", width: "17rem" , padding: "2em" }} />
            <h2> Thoughts on Issues </h2>
          </div>
        </Link>
        </div>
      </div>
      <div className={styles.centralContainerTrending}>
        <h1>Trendings</h1>
        <div className={styles.centralContainerTrendingMain} >
        <div className={styles.centralContainerTrendingCard}>
        <div className={styles.centralContainerTrendingCardDesc} >
          <p>SEX</p>
        </div>
        <img src="images/dashboard/unsplash_01.png" alt=''   />
        <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis elementum ... </p>        
        <button>
          READ MORE
        </button>
        </div>
        <div className={styles.centralContainerTrendingCard}>
        <img src="images/dashboard/unsplash_02.png" alt=''   />  
        <div className={styles.centralContainerTrendingCardDesc} >
          <p>SEX</p>
        </div>
        <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis elementum ... </p>        
        <button>
          READ MORE
        </button>
        </div><div className={styles.centralContainerTrendingCard}>
        <div className={styles.centralContainerTrendingCardDesc} >
          <p>SEX</p>
        </div>
        <img src="images/dashboard/unsplash_03.png" alt=''   />
        <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis elementum ... </p>        
        <button>
          READ MORE
        </button>
        </div><div className={styles.centralContainerTrendingCard}>
        <div className={styles.centralContainerTrendingCardDesc} >
          <p>SEX</p>
        </div>
        <img src="images/dashboard/unsplash_04.png" alt=''   />
        <h2>ADOLENSCE AND SEXUAL INSECURITY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec duis elementum ... </p>        
        <button>
          READ MORE
        </button>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CentralPortion