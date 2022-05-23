import * as React from "react";
import styles from "./Teamsrecordings.module.scss";
import { ITeamsrecordingsProps } from "./ITeamsrecordingsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { MSGraphClient } from "@microsoft/sp-http";

export default class Teamsrecordings extends React.Component<
  ITeamsrecordingsProps,
  {}
> {
  public render(): React.ReactElement<ITeamsrecordingsProps> {
    this.props.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {
        // makes a call to the microsoft graph api
        client
          .api("/me/drive/special/recordings/children")
          .get((error, response: any, rawResponse?: any) => {
            // handle the response
            console.log({ response });
            console.log(response.value)
          });
      });

    return (
      <div>

      </div>
    );
  }
}
