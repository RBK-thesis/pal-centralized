import React from "react";
import "./CSS/CompanyProfile-page.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image, Container, Statistic } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchCompany } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

// import PropTypes from 'prop-types';

const CompanyProfile = (props: any) => {
  const company: any = useSelector((state: any) => state.companyProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(localStorage.getItem("userId")));
  }, []);

  const companys = company.items.user ? company.items.user[0] : "";

  // console.log(companys);

  return (
    <Container style={{ margin: "2rem auto", width: "75%" }}>
      <Card className="card">
        <Card.Content>
          <Image floated="left" size="small" src={companys.logo} />
          <br></br>
          <br></br>
          <Card.Header>{companys.Name}</Card.Header>
          <br></br>
          <Card.Meta>
            <Button>Follow Us</Button>
          </Card.Meta>

          <Card.Description>
            <span>
              <Card.Header className="header"> Description</Card.Header>
              <div className="ui segment">
                <p>{companys.description}</p>
              </div>
            </span>
            <br></br>
            <br></br>
            <span>
              <Card.Header className="header"> contact Us</Card.Header>
              <div className="ui segment">
                <p>{companys.mobileNumber}</p>
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
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </div>
            </span>
            <br></br>
            <span>
              <Card.Header className="header"> Followers</Card.Header>
              <Statistic>
                <Statistic.Value>{companys.followersList}</Statistic.Value>
                <Statistic.Label>Followers</Statistic.Label>
              </Statistic>
            </span>
            <br></br>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to="/companyeditaccount">
            <Button className="followBTN" basic color="red">
              Edit
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </Container>
  );
};
export default CompanyProfile;
