import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./cardInfo.module.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const CardInfo = props => {
  return (
    <div className={styles.cardInfo}>
      <span className={styles.teamName}>cavaliers</span>
      <span className={styles.date}>
        <FontAwesomeIcon icon={faClock} />
      </span>
      29/01/2020
    </div>
  );
};

export default CardInfo;
