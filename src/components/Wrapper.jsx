import React from "react";
import Intro from "./Intro";
import Form from "./Form";
import Summary from "./Summary";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Intro",
    };
  }

  handleStart = () => {
    this.setState({
      current: "Form",
    });
  };

  render() {
    let currentComponent = null;
    if (this.state.current === "Intro") {
      currentComponent = <Intro handleStart={this.handleStart} />;
    } else if (this.state.current === "Form") {
      currentComponent = <Form />;
    } else if (this.state.current === "Summary") {
      currentComponent = <Summary />;
    }

    return <div className="wrapper">{currentComponent}</div>;
  }
}

export default Wrapper;
