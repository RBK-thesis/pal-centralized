import React from "react";
import { Component } from "react";
import "../companyProfile/companyProfile.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class CompanyProfile extends Component {
  render() {
    return (
      <Container className="body">
        <Card className="card">
          <Card.Content>
            <Image
              floated="left"
              size="small"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXZujCeT_t5heuPboVV5AoHhnn2y6XzvpG3del_KRyb2JlRp-SQ&s"
            />
            <br></br>
            <br></br>
            <Card.Header>Company Name</Card.Header>
            <br></br>
            <Card.Meta>
              <Button>Follow Us</Button>
            </Card.Meta>

            <Card.Description>
              <span>
                <Card.Header className="header"> Description</Card.Header>
                <div className="ui segment">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
              </span>
              <br></br>
              <br></br>
              <span>
                <Card.Header className="header"> contact Us</Card.Header>
                <div className="ui segment">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
              </span>
              <br></br>
              <br></br>
              <span>
                <Card.Header className="header"> other links</Card.Header>
                <div className="ui segment">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
              </span>
              <br></br>
              <span>
                <Card.Header className="header"> Followers</Card.Header>
                <div className="ui segment">
                  <p>225,968</p>
                </div>
              </span>
              <br></br>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/companyEdit">
              <Button className="followBTN" basic color="red">
                Edit
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}
