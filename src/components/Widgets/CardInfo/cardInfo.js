import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./cardInfo.module.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.id === team;
    });
    if (data) {
      return data.name;
    }
  };

  return (
    <div className={styles.cardInfo}>
      <span className={styles.teamName}>
        {teamName(props.teams, props.team)}
      </span>
      <span className={styles.date}>
        <FontAwesomeIcon icon={faClock} />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
