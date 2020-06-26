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
          {/* <Header>MyBank</Header> */}

          <Content>{currentComponent}</Content>
          <Footer>
            <div>
              Created by{" "}
              <a href="https://deividasrr.github.io/">Deividas Rutkauskas</a>
              <br></br>
              Source code at{" "}
              <a href="https://github.com/deividasrr/bank-form">Github</a>
              <br></br>
              2020
              <br></br>
              <span>&#9996;</span>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Wrapper;
