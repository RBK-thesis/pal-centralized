import React from "react";
import { Message } from "semantic-ui-react";

const MessageNegative = () => (
  <Message negative>
    <Message.Header>
      "Sorry, something went wrong there. Try again.
    </Message.Header>
  </Message>
);

export default MessageNegative;
