import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
    console.log("child constructor " + this.props.name);
  }
  async componentDidMount() {
    // do API call here
    this.timer = setInterval(() => {
      console.log("Namaste react");
    }, 1000);

    console.log("child componentDidMount " + this.props.name);
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmounted");
  }
  render() {
    console.log(" child render " + this.props.name);
    return (
      <div>
        <h1>Profile Class component</h1>
        <img src={this.state.userinfo.avatar_url} />
        <h2>Name:{this.state.userinfo.name}</h2>
        <h2>Location:{this.state.userinfo.location}</h2>
      </div>
    );
  }
}
export default ProfileClass;
