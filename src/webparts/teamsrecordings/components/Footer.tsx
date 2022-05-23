import * as React from "react";
import styles from "./Teamsrecordings.module.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.footer}>
          <a href="https://onedrive.live.com/" target="_blank">
            <p>Return to Onedrive</p>
            </a>
            <img
              src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/onedrive_48x1.svg"
              width="48"
              height="48"
              alt="teams product icon"
            />
        </div>
      </header>
    );
  }
}
