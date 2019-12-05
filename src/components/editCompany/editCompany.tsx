import React from "react";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "../editCompany/editCompany.css";
import { Button, Form } from "semantic-ui-react";

export default class EditCompany extends Component {
  render() {
    return (
      <Form success className="input">
        <br></br>
        <br></br>
        <br></br>

        <Form.Input
          className="input"
          label="Logo"
          placeholder="upload your photo"
        />
        <Form.Input className="input" label="Company Name" placeholder="" />
        <Form.Input className="input" label="Description" placeholder="" />
        <Form.Input className="input" label="Contact us" placeholder="" />
        <Form.Input className="input" label="Other links" placeholder="" />
        <Button className="updateBTW">Update</Button>
      </Form>
    );
  }
}
