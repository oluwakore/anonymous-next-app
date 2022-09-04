import React from 'react'
import  styles from './anonyStories.module.scss'
import { storiesData } from './data'



function AnonyStoriesComp() {
  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storiesHeadliner}>
        <div className={styles.storiesHeadlinerContent}>
        <div className={styles.storiesHeadlinerContentImages}>
          <img src="images/anony-stories/robot.png" alt="" />
        </div>
        <div className={styles.storiesNotes}>
          <h1>I dont know who to tell, my uncle has been maltreating me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel... </p> 
          <button>READ MORE</button>
        </div>
        </div>
      </div>
      <div  className={styles.storiesMain} >
        <div  className={styles.storiesMainTitle} >
        <h1>ANONYMOUS STORIES</h1>
        </div>
        <div className={styles.storiesMainButtonGroup}>
          <button className={styles.active} >Top</button>
          <button className=''>Trending</button>
          <button className=''>Recommended</button>
        </div>
         <div className={styles.storiesGrid}>
          {storiesData.map((item, index) => (
            <div key={index} className={styles.storiesGridMain}> 
              <img src={item.img} alt="" />
              <div className={styles.storiesGridMainDesc}>
              <h2>{item.title}</h2>
              <p>{item.desc} <span>Continue Reading</span></p>
              </div>
            </div>
          ))}
         </div>
      </div>
    </div>
  )
}

export default AnonyStoriesComp