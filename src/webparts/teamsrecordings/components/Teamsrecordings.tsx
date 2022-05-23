import * as React from "react";
import styles from "./Teamsrecordings.module.scss";
import { ITeamsrecordingsProps } from "./ITeamsrecordingsProps";
import { MSGraphClient } from "@microsoft/sp-http";
import Header from "./Header";
import Footer from "./Footer";

export default class Teamsrecordings extends React.Component< ITeamsrecordingsProps,any> {
  constructor(props) {
    super(props);

    this.props.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {
        // makes a call to the microsoft graph api
        client
          .api("/me/drive/special/recordings/children")
          .get((error, response: any, rawResponse?: any) => {
            // handle the response - sets state to value array from the response object.
            this.setState({
              recordings: response.value,
            });
          });
      });
  }

  public render(): React.ReactElement<ITeamsrecordingsProps, any> {
    return (
      <div>
        <Header />

        {/* checks to see if anything is held in state, if so it will be rendered */}
        {/* maps through the recordings array and renders information retrieves image from WebURL value on recording object*/}
        {this.state?.recordings.map((recording) => {
          return (
            <section className={styles.meetinginfo}>
              <img width="500" height="300" src={recording.webUrl} />
              <h3>
                <a href={recording.webUrl} target="_blank">
                  {" "}
                  {recording.name}
                </a>
              </h3>
              <p>Date: {recording.createdDateTime.slice(0, 10)}</p>
              <p>Time: {recording.createdDateTime.slice(11, 16)} </p>
            </section>
          );
        })}
        <Footer />
      </div>
    );
  }
}
