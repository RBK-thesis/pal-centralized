import React, { useEffect } from "react";
import { Grid, Image, Item, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./General.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";

const HomePagePosts = (props: any) => {
  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  // const postItems = posts.map((post: any) => {
  //   return (
  //     <div key="post.id">
  //       <h3>{post.title}</h3>
  //     </div>
  //   );
  // });
  // dispatch(fetchPost());

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const postItems = posts.items[2] ? posts.items[1].title : "";

  console.log("HELOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
  console.log(postItems);

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <h1>{postItems}</h1>

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>{postItems}</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column>
            <Item.Group className="post-home-page">
              <Item style={{ padding: "2rem 2rem" }}>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Header>Germay Scholarship</Item.Header>
                  <Item.Meta>by RBK</Item.Meta>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae iste soluta incidunt dignissimos. Similique eaque
                      quas corrupti, maxime doloribus expedita?
                    </p>
                  </Item.Description>
                  <Item.Extra as="a">
                    <Link to="#">Additional Details</Link>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

// const mapStateTpProps = (state: any) => {
//   return {
//     counter: state
//   };
// };

// export default connect(mapStateTpProps)(HomePagePosts);
export default HomePagePosts;
