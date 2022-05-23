import * as React from "react";
import styles from "./Teamsrecordings.module.scss";
import { ITeamsrecordingsProps } from "./ITeamsrecordingsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { MSGraphClient } from "@microsoft/sp-http";

export default class Teamsrecordings extends React.Component<ITeamsrecordingsProps, any>{
  constructor(props) {
    super(props)


    this.props.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {
        // makes a call to the microsoft graph api
        client
          .api("/me/drive/special/recordings/children")
          .get((error, response: any, rawResponse?: any) => {

            // handle the response - sets state to 
            this.setState({
              recordings: response.value
            })
          });
      });
  }

  public render(): React.ReactElement<ITeamsrecordingsProps, any> {

    return (
      <div>
        <h1>Recordings</h1>
        {/* checks to see if anything is held in state, if so it will be rendered */}
        {this.state?.recordings.map((recording) => {
          return <p>{recording.name}</p>
        })}
      </div>
    );
  }
}