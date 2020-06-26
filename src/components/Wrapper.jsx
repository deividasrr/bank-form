import React from "react";
import Intro from "./Intro";
import Form from "./Form";
import Summary from "./Summary";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

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

    return (
      <div className=" wrapper">
        <Layout className=" wrapper">
          <Content style={{ padding: "0 50px" }}>{currentComponent}</Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Wrapper;
