import React from "react";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

const WarningMessage = () => (
  <Message warning>
    <Message.Header>
      You must Login before you can see more info!
    </Message.Header>
    <p>
      Visit our{" "}
      <em>
        {"  "}
        <Link to="/login">Login page</Link>
      </em>{" "}
    </p>
  </Message>
);

export default WarningMessage;
