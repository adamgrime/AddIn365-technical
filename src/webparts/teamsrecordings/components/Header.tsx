import * as React from "react";
import { FontSizes } from "@fluentui/theme";
import styles from "./Teamsrecordings.module.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.header}>
          <h1 >Recordings</h1>
          <img
            src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/teams_48x1.svg"
            width="48"
            height="48"
            alt="teams product icon"
          />
        </div>
      </header>
    );
  }
}
