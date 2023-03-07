import React from "react";
import styles from "./radio.module.scss";

function Radio({ selected, onChange, text, value }) {
  return (
    <div
      className={styles.modernRadioContainer}
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={[
          styles.radioOuterCircle,
          value !== selected && styles.unselected,
        ].join(" ")}
      >
        <div
          className={[
            styles.radioInnerCircle,
            value !== selected && styles.unselectedCircle,
          ].join(" ")}
        />
      </div>
      <div className={styles.helperText}>{text}</div>
    </div>
  );
}

export default Radio;
