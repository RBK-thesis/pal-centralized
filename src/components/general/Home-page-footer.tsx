import React, { useEffect, useState } from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "../../style.css/form.css";
import { Link } from "react-router-dom";
const HomePageFooter = () => {
  const [userType, setuserType] = useState(localStorage.getItem("token"));

  // let userType = localStorage.getItem("userType");
  // check if there is a user logged or not
  useEffect(() => {
    setuserType(localStorage.getItem("userType"));
  }, []);
  if (userType) {
    return (
      <div>
        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={5}>
                <Link to="/aboutus">
                  <Header inverted as="h4" content="About Us" />
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Link to="/contactus">
                  <Header inverted as="h4" content="Contact Us" />
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="CopyRight" />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  } else {
    return (
      <div>
        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={5}>
                <Link to="/aboutuscompany">
                  <Header inverted as="h4" content="About Us" />
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Link to="/contactuscompany">
                  <Header inverted as="h4" content="Contact Us" />
                </Link>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="CopyRight" />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
};

export default HomePageFooter;
