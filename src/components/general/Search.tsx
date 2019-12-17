import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Dropdown, Icon, Grid, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { search } from "../../actions";

// Majors : Media

// this the Option for Major
export const majorOptions = [
  { key: "a1", value: "m1", text: "Achitecture" },
  { key: "a2", value: "m2", text: "Art" },
  { key: "a3", value: "m3", text: "Business" },
  { key: "a4", value: "m4", text: "Media" },
  { key: "a5", value: "m5", text: "Computer" },
  { key: "a6", value: "m6", text: "Science" },
  { key: "a7", value: "m7", text: "Medicine" },
  { key: "a8", value: "m8", text: "Languages" },
  { key: "a9", value: "m9", text: "Law" },
  { key: "a10", value: "m10", text: "Philosophy" },
  { key: "a11", value: "m11", text: "Political" },
  { key: "a12", value: "m12", text: "Tourisim" },
  { key: "a13", value: "m13", text: "Sports" },
  { key: "a14", value: "m14", text: "History" },
  { key: "a15", value: "m15", text: "Engineerong" },
  { key: "a16", value: "m16", text: "IT" },
  { key: "a17", value: "m17", text: "Education" },
  { key: "a18", value: "m18", text: "Literature" }
];

// this the Option for Type
export const typesOptions = [
  { key: "a1", value: "t1", text: "scholarShip" },
  { key: "a2", value: "t2", text: "jop" },
  { key: "a3", value: "t3", text: "training" }
];

const Search = () => {
  let [majorQuerySearch, setMajorQuerySearch] = useState("");
  let [typeQuerySearch, setTypeQuerySearch] = useState("");
  let [enteredQuerySearch, setenteredQuerySearch] = useState("");
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));
  const [searchURL, setsearchURL] = useState(localStorage.getItem(""));

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLogged(localStorage.getItem("token"));
  }, []);

  // if (isLogged) {
  //   setsearchURL("/searchresultuser");
  // } else {
  //   setsearchURL("/searchresult");
  // }

  // to take the value of dropdowns search by Type ----------------------
  const hundleDropDownChangeByMajor = (e: any) => {
    setMajorQuerySearch(e.target.textContent);
  };

  // to take the value of dropdowns search by Type ----------------------
  const hundleDropDownChangeByType = (e: any) => {
    setTypeQuerySearch(e.target.textContent);
  };

  // to take the value from input search field --------------------------
  const hundleChange = (e: any) => {
    setenteredQuerySearch(e.target.value);
  };

  // Hundle the search button -------------------------------------------
  const onSearch = () => {
    // console.log(majorQuerySearch, typeQuerySearch, enteredQuerySearch);
    let querySearch = {
      major: majorQuerySearch,
      type: typeQuerySearch,
      enterQuery: enteredQuerySearch
    };
    dispatch(search(querySearch));
  };

  return (
    <div style={{ margin: "6rem auto 0 auto", width: "70%" }}>
      <div>
        <Menu pointing>
          {/* ------------------------------------ Search Dropdown--------------------------------- */}

          <Menu.Item>
            <Dropdown
              placeholder="choose major..."
              fluid
              search
              selection
              options={majorOptions}
              onChange={hundleDropDownChangeByMajor}
            />
          </Menu.Item>
          {/* ------------------------------------ Search Dropdown--------------------------------- */}

          <Menu.Item>
            <Dropdown
              placeholder="choose Category..."
              fluid
              search
              selection
              options={typesOptions}
              onChange={hundleDropDownChangeByType}
            />
          </Menu.Item>

          {/* ------------------------------------ Search Input--------------------------------- */}

          <Menu.Item>
            <Input placeholder="Search..." onChange={hundleChange} />
          </Menu.Item>

          {/* ------------------------------------ Search Button--------------------------------- */}
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/searchresult">
                <Button primary onClick={onSearch}>
                  <Grid columns={2} divided>
                    <Grid.Column>Search</Grid.Column>
                    <Grid.Column>
                      <Icon inverted name="search" />
                    </Grid.Column>
                  </Grid>
                </Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>{" "}
    </div>
  );
};

export default Search;
