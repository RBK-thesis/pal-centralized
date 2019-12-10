import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const languageOptions = [{}];
export default class FavoriteUserList extends Component {
  render() {
    return (
      <div>
        <Dropdown className="icon" icon="heart" options={languageOptions}>
          <Dropdown.Menu>
            <Dropdown.Item text="New" />
            <Dropdown.Item text="New" />
            <Dropdown.Item text="New" />
            <Dropdown.Item text="New" />
            <Dropdown.Item text="New" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
