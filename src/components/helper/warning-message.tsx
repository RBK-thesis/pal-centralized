import React from "react";
import { Message } from "semantic-ui-react";

const WarningMessage = () => (
  <Message warning>
    <Message.Header>
      You must Login before you can see more info!
    </Message.Header>
    <p>
      Visit our <em>Login page</em>{" "}
    </p>
  </Message>
);

export default WarningMessage;
