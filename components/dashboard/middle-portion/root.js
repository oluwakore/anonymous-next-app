import React from "react";
import Left from "./left/left";
import CentralPortion from "./main/main";
import Right from "./right/right";
import styles from "./root.module.scss";

function MainContent({ sessions, calendarDates }) {
  return (
    <div className={styles.maincontentContainer}>
      <Left />
      <CentralPortion />
      <Right sessionsData={sessions} calendarDatesArray={calendarDates} />
    </div>
  );
}

export default MainContent;
