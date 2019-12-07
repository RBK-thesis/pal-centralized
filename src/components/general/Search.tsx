import React, { Component } from "react";
import { Button, Menu, Dropdown, Icon, Grid } from "semantic-ui-react";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 }
];
export default class Search extends Component {
  render() {
    return (
      <div style={{ margin: "6rem auto 0 auto", width: "70%" }}>
        <div>
          <Menu pointing>
            <Menu.Item>
              <Dropdown clearable options={options} selection />
            </Menu.Item>
            <Menu.Item>
              <Dropdown clearable options={options} selection />
            </Menu.Item>
            <Menu.Item>
              <Dropdown clearable options={options} selection />
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item>
                <Button primary>
                  <Grid columns={2} divided>
                    <Grid.Column>Search</Grid.Column>
                    <Grid.Column>
                      <Icon inverted name="search" />
                    </Grid.Column>
                  </Grid>
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>{" "}
      </div>
    );
  }
}
