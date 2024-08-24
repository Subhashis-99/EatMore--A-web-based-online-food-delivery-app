import { Component } from "react";
import { userData } from "../utils/userContext";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor / class based");
  }

  componentDidMount() {
    console.log("parent componentDidMount / class based");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <userData.Consumer>
          {({ user }) => (
            <h4>
              {user.name} - {user.email}
            </h4>
          )}
        </userData.Consumer>
        <p>This is the part of namaste react Day-08 code</p>
        <Profile name={"chiku"} />
      </div>
    );
  }
}

export default About;
